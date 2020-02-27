const Pool = require('pg').Pool;
// connection information
const pool = new Pool({
  user: 'robgonzalez-pita',
  host: 'localhost',
  database: 'productoverview',
  password: 'password',
  port: 5432,
});


//ec2 instance connected
// const pool = new Pool({
//   user: 'postgres',
//   host: '3.16.10.167',
//   database: 'productoverview',
//   password: 'hello',
//   port: 5432,
// });




module.exports = pool;
