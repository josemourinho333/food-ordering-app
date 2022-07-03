const db = require('./db-connect');

const getMenuItems = () => {
  return db.query('SELECT * FROM menu_items')
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {console.log(error.message)});
};
const getMenuItemById = (id) => {
  return db.query('SELECT * FROM menu_items WHERE menu_items.id = $1;', [id])
    .then((response) => {
      return response.rows[0];
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = { getMenuItems, getMenuItemById };
