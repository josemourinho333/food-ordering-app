// PG database client/connection setup
const pg = require('pg');
const dbParams = require('../lib/db');
const Pool = pg.Pool;

const db = new Pool(dbParams);

db.connect(() => {
  console.log('connected to database');
});

module.exports = db;


