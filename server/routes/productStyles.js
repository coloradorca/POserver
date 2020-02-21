// Product Styles
// Returns the all styles available for the given product.

// GET /products/:product_id/styles

// Parameters

// Parameter	Type	Description
// product_id	integer	Required ID of the Product requested
// Response

// Status: 200 OK
const pool = require('../db/config.js');

const getProductStyles = async (request, response) => {
  const query = {
    name: 'fetch-productList',
    text:
      // 'SELECT product.id, product.name, original_price, sale_price, default_style, photos.thumbnail_url, photos.url, skus.size, skus.quantity FROM product INNER JOIN styles ON styles.productid = product.id INNER JOIN photos ON photos.style_id = styles.productid INNER JOIN skus ON skus.style_id = styles.productid WHERE product.id = $1;',
      //this one gets all the data, but not packaged
      'SELECT productid, styles.id, name, original_price, sale_price, default_style, photos.thumbnail_url, photos.url, skus.size, skus.quantity FROM styles LEFT OUTER JOIN photos ON photos.style_id = styles.productid LEFT OUTER JOIN skus ON skus.style_id = styles.productid WHERE styles.productid= $1;',
    values: [request.params.product_id],
  };

  pool
    .query(query)
    .then((res) => {
      console.log(
        // id: res.rows[0].productid,
        // results: [
        //   {
        //     style_id: res.rows[0].id,
        //     name: res.rows[0].name,
        //     original_price: res.rows[0].original_price,
        //     sale_price: res.rows[0].sale_price,
        //     'default?': res.rows[0].default_style,
        //   },
        // ],
        // results: res.rows.map((el, id) => ({
        //   style_id: res.rows[id].id,
        //   name: res.rows[id].name,
        //   original_price: res.rows[id].original_price,
        //   sale_price: res.rows[id].sale_price,
        //   'default?': res.rows[id].default_style,
        // })),
        res.rows[0],
      );
    })
    .catch((e) => console.error(e.stack));

  response.send('request processing');
};

module.exports = getProductStyles;
