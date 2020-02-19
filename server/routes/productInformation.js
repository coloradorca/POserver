// Product Information
// Returns all product level information for a specified product id.

// GET /products/:product_id

// Parameters

// Parameter	Type	Description
// product_id	integer	Required ID of the Product requested
// Response

// Status: 200 OK

// SELECT
//    customer.customer_id,
//    first_name,
//    last_name,
//    email,
//    amount,
//    payment_date
// FROM
//    customer
// INNER JOIN payment ON payment.customer_id = customer.customer_id;

const pool = require('../db/config.js');

//join with the features table and attach the features to response object

const getProductInformation = async (request, response) => {
  const query = {
    name: 'fetch-productInformation',
    text: `SELECT
              product.id,
              name,
              slogan,
              description,
              category,
              default_price,
              feature,
              value
          FROM
            product
          INNER JOIN features ON features.style_id = product.id
           WHERE
           product.id = $1;`,
    values: [request.params.product_id],
  };
  // console.log(query.values);
  pool
    .query(query)
    .then((res) =>
      response.send({
        id: res.rows[0].id,
        name: res.rows[0].name,
        slogan: res.rows[0].slogan,
        description: res.rows[0].description,
        category: res.rows[0].category,
        default_price: res.rows[0].default_price,
        features: res.rows.map((el) => ({
          feature: el.feature,
          value: el.value,
        })),
      }),
    )
    .catch((e) => console.error(e.stack));

  // response.sendStatus(200);
};

module.exports = getProductInformation;
