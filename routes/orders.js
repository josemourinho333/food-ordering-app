const express = require('express');
const router = express.Router();
const txtSend = require('../twilio/twilio-queries');

// subject to change per Denis
const ordersQueries = require('../db/orders-queries');

// testing purposes
const admin = true;

// testing purposes II
const order = {
  id: 1,
  user_id: 2,
  order_placed: new Date(),
  order_pickup: new Date() 
}

// get /orders/ - display list of all orders if admin, else redirect to /orders/:id
router.get('/', (req, res) => {
  if (!admin) {
    console.log('hell nah you aint admin');
    return res.render('index');
  }
  ordersQueries.getAllOrders()
  .then((allOrders) => {
    const templateVars = {
      allOrders,
    }
    console.log('all orders', templateVars);
    txtSend.orderConfirmed();
    res.render('orders', templateVars);
  })
  .catch((error) => {
    console.log(error.message);
  })
});

module.exports = router;

