// List Products
// GET /products/list Retrieves the list of products.

// Parameters

// Parameter	Type	Description
// page	integer	Selects the page of results to return. Default 1.
// count	integer	Specifies how many results per page to return. Default 5.
// Response
// Status: 200 OK

const pool = require('../db/config.js');

const getProductList = async (request, response) => {
  const query = {
    name: 'fetch-productList',
    text: 'SELECT * FROM product ORDER BY id ASC LIMIT $1;',
    // if need to pass arguments to query, insert them into the values array below
    // in text above, index #1 in values array is '$1' (i.e. 5), $2 is second index in values array below
    values: [5],
  };

  pool
    .query(query)
    //remove the newline character coming back from database
    // .then((res) => res.json())
    .then((res) => response.send(res.rows))
    .catch((e) => console.error(e.stack));

  // response.sendStatus(200);
};

// const getProductList = async (req, res) => {
//   await pool.query('SELECT * FROM product WHERE id=1;', (err, res) => {
//     console.log(err, res);
//     pool.end();
//   });

//   res.sendStatus(200);
// };

module.exports = getProductList;
