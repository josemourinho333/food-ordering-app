const db = require('./db-connect');

const getMenuItems = () => {
  return db.query('SELECT * FROM menu_items')
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {console.log(error.message)});
};

module.exports = { getMenuItems };
