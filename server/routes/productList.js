// List Products
// GET /products/list Retrieves the list of products.

// Parameters
// Parameter	Type	Description
// page	integer	Selects the page of results to return. Default 1.
// count	integer	Specifies how many results per page to return. Default 5.
// Response:  Status: 200 OK

const pool = require('../db/config.js');

const getProductList = async (request, response) => {
  const query = {
    name: 'fetch-productList',
    text: 'select * FROM product ORDER BY id ASC LIMIT $1;',
    values: [5],
  };

  pool
    .query(query)
    .then((res) => response.status(200).send(res.rows))
    .catch((e) => console.error(e.stack));
};

module.exports = getProductList;
