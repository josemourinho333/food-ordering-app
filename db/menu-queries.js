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

// created in local for testing purposes. Delete when no logner needed.
const addNewOrder = (userId) => {
  return db.query(`
    INSERT INTO orders (user_id)
    VALUES ($1) RETURNING *;
  `, [userId])
    .then((response) => {
      return response.rows[0];
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// created in local for testing. Delete if no needed
const addNewItem = (item) => {
  return db.query(`
    INSERT INTO order_items (order_id, menu_item_id, quantity)
    VALUES ($1, $2, $3) RETURNING *;
  `, [item.orderId, item.itemId, item.quantity])
    .then((response) => {
      return response.rows[0];
    })
    .catch((error) => {
      console.log(error.message)
    })
}

module.exports = { getMenuItems, getMenuItemById, addNewOrder, addNewItem };
