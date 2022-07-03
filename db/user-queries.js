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
  return db.query('SELECT * FROM users WHERE users.id = $1;', [id])
    .then((response) => {
      return response.rows[0];
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const getAllOrdersByUserId = (id) => {
  return db.query('SELECT orders.* FROM orders JOIN users ON users.id = orders.user_id WHERE users.id = $1;', [id])
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const getAllItemsInOrder = (id) => {
  return db.query('SELECT order_items.* FROM order_items JOIN orders ON orders.id = order_items.order_id WHERE orders.id = 1;', [id])
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};



module.exports = {
  getUsers, getUserById, getAllOrdersByUserId, getAllItemsInOrder,
}

// List of queries
