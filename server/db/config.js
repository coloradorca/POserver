const Pool = require('pg').Pool;
// connection to the local Postgres DB
// const pool = new Pool({
//   user: 'robgonzalez-pita',
//   host: 'localhost',
//   database: 'productoverview',
//   password: 'password',
//   port: 5432,
// });

// ec2 instance connection
const pool = new Pool({
  user: 'postgres',
  host: '3.16.10.167',
  database: 'productoverview',
  password: 'hello',
  port: 5432,
});

module.exports = pool;
