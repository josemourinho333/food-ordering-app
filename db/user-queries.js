// database connection to make queries possible
const db = require('./db-connect');

const getUsers = () => {
  return db.query(`SELECT * FROM users;`)
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const getUserById = (id) => {
  return db.query(`SELECT * FROM users WHERE users.id = $1;`, [id])
    .then((response) => {
      return response.rows[0];
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const getAllOrdersByUserId = (id) => {
  return db.query(`SELECT orders.* FROM orders JOIN users ON users.id = orders.user_id WHERE users.id = $1;`, [id])
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};
const getAllOrdersAsAdmin = () => {
  return db.query(`SELECT orders.* FROM orders;`)
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const getAllItemsInOrder = (id) => {
  return db.query(`SELECT orders.id AS order, order_items.id AS item#, menu_items.name, order_items.quantity FROM order_items JOIN menu_items ON order_items.menu_item_id = menu_items.id JOIN orders ON orders.id = order_items.order_id WHERE orders.id = $1;`, [id])
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};
const AddItemToOrder = (orderID, itemID, quantity) => {
  let vals = [orderID, itemID, quantity]
  return db.query(`INSERT INTO order_items ( order_id, menu_item_id, quantity)  VALUES  ( $1, $2, $3) RETURNING *;`, [vals])
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// UPDATE orders SET time_of_pickup = time_sent + INTERVAL '45 minutes'  WHERE orders.id = 1 RETURNING *;

module.exports = {
  getUsers, getUserById, getAllOrdersByUserId, getAllOrdersAsAdmin, getAllItemsInOrder, AddItemToOrder
}

// List of queries
