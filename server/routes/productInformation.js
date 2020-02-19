// Product Information
// Returns all product level information for a specified product id.

// GET /products/:product_id

// Parameters

// Parameter	Type	Description
// product_id	integer	Required ID of the Product requested
// Response

// Status: 200 OK
const pool = require('../db/config.js');

//join with the features table and attach the features to response object

const getProductInformation = async (request, response) => {
  const query = {
    name: 'fetch-productInformation',
    text: 'SELECT * FROM product WHERE id = $1',
    values: [req.params.product_id],
  };
  // console.log(query.values);
  pool
    .query(query)
    .then((res) => console.log(res.rows[0]))
    .catch((e) => console.error(e.stack));

  response.sendStatus(200);
};

module.exports = getProductInformation;
