const pg = require('pg');
const config = require('../config.js').db

const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('connected to the Database');
});

module.exports = {
    pool,
  };
  