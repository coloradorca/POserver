// Product Styles
// Returns the all styles available for the given product.

// GET /products/:product_id/styles

// Parameters

// Parameter	Type	Description
// product_id	integer	Required ID of the Product requested
// Response

// Status: 200 OK
const pool = require('../db/config.js');

const getProductStylesPlayground = async (request, response) => {
  const query = {
    name: 'fetch-styles',
    text:
      'SELECT product_id, styles.style_id, name, original_price, sale_price, default_style, photos.thumbnail_url, photos.url, skus.size, skus.quantity FROM styles INNER JOIN photos ON photos.style_id = styles.product_id INNER JOIN skus ON skus.style_id = styles.product_id WHERE styles.product_id = $1 ORDER BY style_id;',
    values: [request.params.product_id],
  };

  pool
    .query(query1)
    .then((res) => {
      // console.log({
      //   id: res.rows[0].productid,
      //   results: res.rows.map((el, id) => ({
      //     style_id: res.rows[0].style_id,
      //     name: res.rows[0].name,
      //     original_price: res.rows[0].original_price,
      //     sale_price: res.rows[0].sale_price,
      //     'default?': res.rows[0].default_style,
      //   })),
      // });

      response.json(res.rows);
    })
    .catch((e) => console.error(e.stack));

  // response.send('processing');
};

module.exports = getProductStylesPlayground;

// const getStyles = function(styles){
//   let returnValue = {};
//   returnValue['product_id'] = styles[0].product_id;
//   returnValue.results = [{style_id : styles[0].style_id, name: styles[0].name, original_price : styles[0].original_price, sale_price : styles[0].sale_price, "default?" : styles[0].default_style, photos : []}];
//   for(var i = 0; i < styles.length; i++){
//     if(returnValue.results[0]['style_id'] !== styles[i].style_id)
//     returnValue.results.push({style_id : styles[i].style_id, name: styles[i].name, original_price: styles[i].original_price, sale_price : styles[i].sale_price, "default?" : styles[i].default_style, photos: []})

//   }

//   return returnValue;
// }
