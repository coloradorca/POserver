// Related Products
// Returns the id's of products related to the product specified.

// GET /products/:product_id/related

// Parameters

// Parameter	Type	Description
// product_id	integer	Required ID of the Product requested
// Response

// Status: 200 OK

//import pool from
const pool = require('../db/config.js');

const getRelatedProducts = () => console.log('getRelatedProducts route called');

module.exports = getRelatedProducts;
