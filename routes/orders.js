const express = require('express');
const router = express.Router();
const txtSend = require('../twilio/twilio-queries');

// subject to change per Denis
const ordersQueries = require('../db/orders-queries');

// testing purposes
const admin = true;

// get /orders/ - display list of all orders if admin, else redirect to /orders/:id
router.get('/', (req, res) => {
  if (!admin) {
    console.log('hell nah you aint admin');
    return res.render('index');
  }
  // need db/order queries
  ordersQueries.getAllOrders()
  .then((allOrders) => {
    const templateVars = {
      allOrders,
    }
    console.log('all orders', templateVars);
    res.render('orders', templateVars);
  })
  .catch((error) => {
    console.log(error.message);
  })
});

module.exports = router;

