// Product Styles
// Returns the all styles available for the given product.

// GET /products/:product_id/styles

// Parameters

// Parameter	Type	Description
// product_id	integer	Required ID of the Product requested
// Response

// Status: 200 OK
const pool = require('../db/config.js');

const getProductStyles = () => console.log('getProductStyles route called');

module.exports = getProductStyles;
