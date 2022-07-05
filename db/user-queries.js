// database connection to make queries possible
const db = require('./db-connect');


//USER QUERIES
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
  // console.log('id',id)
  return db.query(`SELECT orders.* FROM orders JOIN users ON users.id = orders.user_id WHERE users.id = $1 ORDER BY orders.time_sent DESC;`, [id])
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};
const getAllSentOrdersAsAdmin = () => {
  return db.query(`SELECT orders.* FROM orders WHERE orders.status_sent = true;`)
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};


// const setPickUpTimeToOrder = (orderID, timeInMinutes) => {
//   let vals = [orderID, timeInMinutes]
//   return db.query(`UPDATE orders SET time_of_pickup = time_sent + INTERVAL '$1 minutes'  WHERE orders.id = $2 RETURNING *;`, [vals])
//     .then((response) => {
//       return response.rows;
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// };

const updateStatusWhenOrderSent = (orderID) => {
  let vals = [orderID]
  return db.query(`UPDATE orders SET status_sent = 'true', time_sent = CURRENT_TIMESTAMP  WHERE orders.id = $1 RETURNING *;`, vals)
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const updateStatusOwnerConfirm = (orderID, timeInMinutes) => {
  let vals = [orderID, timeInMinutes]
  return db.query(`UPDATE orders SET status_finished = 'true', time_confirmed = CURRENT_TIMESTAMP, time_of_pickup = CURRENT_TIMESTAMP + INTERVAL '$2 minutes'   WHERE orders.id = $1 RETURNING *;`, vals)
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

//  ORDER QUERIES

const getAllItemsInOrder = (id) => {
  return db.query(`SELECT orders.id AS orderID, order_items.id AS itemNumber, menu_items.name, menu_items.price, order_items.quantity AS total_sum FROM order_items JOIN menu_items ON order_items.menu_item_id = menu_items.id JOIN orders ON orders.id = order_items.order_id WHERE orders.id = $1;`, [id])
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};
const addItemToOrder = (item) => {
  let vals = [item.orderId, item.itemId, item.quantity]
  return db.query(`INSERT INTO order_items ( order_id, menu_item_id, quantity)  VALUES  ( $1, $2, $3) RETURNING *;`, vals)
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};
const createOrder = (id) => {
  let vals = [id]
  return db.query(`INSERT INTO orders ( user_id)  VALUES  ($1) RETURNING *;`, vals)
    .then((response) => {
      return response.rows[0];
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const getETAofOrder = (id) => {
  return db.query(`SELECT EXTRACT(EPOCH FROM (time_of_pickup - time_confirmed)/60) AS ETA FROM orders WHERE orders.id = $1;`, [id])
    .then((response) => {
      return response.rows[0];
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const getTotalInOrder = (id) => {
  return db.query(`SELECT orders.id AS orderID, COUNT(order_items.id) AS total_items, SUM(menu_items.price*order_items.quantity) AS total_sum FROM order_items JOIN menu_items ON order_items.menu_item_id = menu_items.id JOIN orders ON orders.id = order_items.order_id WHERE orders.id = $1 GROUP BY orders.id;`, [id])
    .then((response) => {
      return response.rows[0];
    })
    .catch((error) => {
      console.log(error.message);
    });
};
// need to * with quantity if we`ll use it

module.exports = {
  getUsers, getUserById, createOrder, getAllOrdersByUserId, getAllSentOrdersAsAdmin, getAllItemsInOrder, addItemToOrder, updateStatusWhenOrderSent, updateStatusOwnerConfirm, getETAofOrder, getTotalInOrder
}

// List of queries
