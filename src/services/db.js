const pg = require('pg');

const config = {
  user: 'if0s', //this is the db user credential
  database: 'billing',
  password: 'vtvadmin',
  port: 5432,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('connected to the Database');
});