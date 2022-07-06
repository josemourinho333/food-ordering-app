// database connection to make queries possible
const db = require('./db-connect');

//###################################################################################
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

//###############################################################################
//******************************************Status Queries
const updateStatusWhenOrderSent = (orderID) => {
  let vals = [orderID]
  return db.query(`UPDATE orders SET status_sent = 'true', time_sent = CURRENT_TIMESTAMP AT TIME ZONE 'America/Los_Angeles'  WHERE orders.id = $1 RETURNING *;`, vals)
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// updated by Phil july 5th.. keep this one
const updateStatusOwnerConfirm = (orderID, ETA) => {

  let minutes = ETA + ' minutes';
  let vals = [orderID, minutes];

  return db.query("UPDATE orders SET status_finished = 'true', time_confirmed = CURRENT_TIMESTAMP AT TIME ZONE 'America/Los_Angeles', time_of_pickup = CURRENT_TIMESTAMP AT TIME ZONE 'America/Los_Angeles' + cast($2 as INTERVAL)  WHERE orders.id = $1 RETURNING *;", vals)
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

//###################################################################
//*******************GET FROM ORDER */

const getAllOrdersByUserId = (id) => {
  // console.log('id',id)
  return db.query(`SELECT orders.* FROM orders JOIN users ON users.id = orders.user_id WHERE users.id = $1 ORDER BY orders.time_sent DESC LIMIT 20;`, [id])
  // return db.query(`SELECT orders.*, TO_CHAR (orders.time_sent, 'DD-MM-YYYY') AS DAY, SUM(menu_items.price*order_items.quantity) AS total_sum, FROM orders LEFT JOIN order_items ON orders.id = order_items.order_id LEFT JOIN menu_items ON order_items.menu_item_id = menu_items.id WHERE orders.status_sent = true AND orders.user_id = $1 GROUP BY orders.id ORDER BY orders.time_sent DESC LIMIT 20;`, [id])
    .then((response) => {
      console.log('looking', response.rows);
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};
const getAllSentOrdersAsAdmin = () => {
  // return db.query(`SELECT orders.id, MIN(users.name) AS name, orders.status_finished, orders.time_sent, orders.time_confirmed, orders.time_of_pickup, SUM(menu_items.price*order_items.quantity) AS total_sum FROM order_items JOIN menu_items ON order_items.menu_item_id = menu_items.id JOIN orders ON orders.id = order_items.order_id JOIN users ON users.id = orders.user_id WHERE orders.status_sent = true GROUP BY orders.id;`)
  // return db.query(`SELECT orders.id, orders.status_sent, orders.time_sent, MIN(users.name)  AS name, SUM(menu_items.price*order_items.quantity) AS total_sum  FROM orders LEFT JOIN order_items ON orders.id = order_items.order_id LEFT JOIN users ON users.id = orders.user_id LEFT JOIN menu_items ON order_items.menu_item_id = menu_items.id GROUP BY orders.id ORDER BY orders.time_sent DESC LIMIT 20;`)
  return db.query(`SELECT orders.id, orders.status_sent, DATE(orders.time_sent), TO_CHAR (orders.time_sent, 'DD-MM-YYYY') AS DAY, MIN(users.name)  AS name, SUM(menu_items.price*order_items.quantity) AS total_sum, orders.status_finished  FROM orders LEFT JOIN order_items ON orders.id = order_items.order_id LEFT JOIN users ON users.id = orders.user_id LEFT JOIN menu_items ON order_items.menu_item_id = menu_items.id GROUP BY orders.id ORDER BY orders.time_sent DESC LIMIT 20;`)
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};



//#################################################################################
//  ORDER QUERIES

const getAllItemsInOrder = (id) => {
  // return db.query(`SELECT orders.id AS orderID, order_items.menu_item_id AS itemNumber, menu_items.name, menu_items.price, order_items.quantity FROM order_items JOIN menu_items ON order_items.menu_item_id = menu_items.id JOIN orders ON orders.id = order_items.order_id WHERE orders.id = $1;`, [id])
  return db.query(`SELECT orders.id AS orderID, order_items.menu_item_id AS itemNumber, MIN(menu_items.name), MIN(menu_items.price), SUM(order_items.quantity) FROM order_items JOIN menu_items ON order_items.menu_item_id = menu_items.id JOIN orders ON orders.id = order_items.order_id WHERE orders.id = $1 GROUP BY itemNumber, orders.id;`, [id])

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
const EditItemInOrder = (item) => {
  let vals = [item.orderId, item.itemId, item.quantity]
  return db.query(`UPDATE order_items SET quantity = $3 WHERE order_id = $1 AND menu_item_id = $2  RETURNING *;`, vals)
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const DeleteItemInOrder = (item) => {
  let vals = [item.orderId, item.itemId]
  return db.query(`DELETE FROM order_items WHERE order_id = $1 AND menu_item_id = $2 ;`, vals)
    .then((response) => {
      return response.rows;
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
  return db.query(`SELECT orders.id AS orderID, COUNT(order_items.id) AS total_positions, SUM(order_items.quantity) AS total_quantity, SUM(menu_items.price*order_items.quantity) AS total_sum FROM order_items JOIN menu_items ON order_items.menu_item_id = menu_items.id JOIN orders ON orders.id = order_items.order_id WHERE orders.id = $1 GROUP BY orders.id;`, [id])
    .then((response) => {
      return response.rows[0];
    })
    .catch((error) => {
      console.log(error.message);
    });
};
// need to * with quantity if we`ll use it

module.exports = {
  getUsers, getUserById, createOrder, getAllOrdersByUserId, getAllSentOrdersAsAdmin, getAllItemsInOrder, addItemToOrder, updateStatusWhenOrderSent, updateStatusOwnerConfirm, getETAofOrder, getTotalInOrder, DeleteItemInOrder, EditItemInOrder
}

// List of queries
