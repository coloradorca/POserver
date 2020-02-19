// //sample from node-postgres docs

const Pool = require('pg').Pool;

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
//   pool.end();
// });
// // you can also use async/await
// const res = await pool.query('SELECT NOW()');
// await pool.end();
// // clients will also use environment variables
// // for connection information

// this will hold all the connection information
const pool = new Pool({
  user: 'robgonzalez-pita',
  host: 'localhost',
  database: 'productoverview',
  password: 'password',
  port: 5432,
});

module.exports = pool;
