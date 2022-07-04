const express = require('express');
const router = express.Router();
const txtSend = require('../twilio/twilio-queries');

// subject to change per Denis
const ordersQueries = require('../db/orders-queries');
// const { twilioParams } = require('../twilio/twilio-setup');
// const { sms } = require('../twilio/sms');

// testing purposes
const admin = true;

// When an order is placed the restaurant receives the order via SMS. The restaurant can then specify how long it will take to fulfill it. Once they provide this information, the website updates for the client and also notifies them via SMS.

// testing purposes II
const order = {
  id: 123,
  user_id: 2,
  order_placed: new Date(),
}

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
    /// testing
    txtSend.orderConfirmed(order);
    // txtSend.orderReady(order);
    ///
    res.render('orders', templateVars);
  })
  .catch((error) => {
    console.log(error.message);
  })
});

/// MOVED TO menu.js now with /menu/orders/:id post request.

//TESTING
// const MessagingResponse = require('twilio').twiml.MessagingResponse;

// const orderId = { id: 3};
// should send order info to restaurant via sms
// router.post('/new', (req, res) => {
//   console.log('**** new order came in ****');
//   console.log('new item added', req.body);
//   console.log('orderId', orderId);
  /// can send to Den here an object with those req.body and orderId in it.

  // need to always render each add to cart click....


  // txtSend.newOrder(req.body);
  // send off req.body to Den
  // ordersQueries.newOrder(req.body)
  //   .then()

  // if (req.body.statusSent) {
  //   txtSend.newOrder()
  // } else {
  //   const ownerConfirm = req.body.Body;
  //   console.log('inside confirming', req.body);
  //   if (ownerConfirm) {
  //     // Start our TwiML response.
  //     const reply = new MessagingResponse();
  //     // // Add a text message.
  //     const message = reply.message();
  //     message.body('from message body');
  //     res.end(reply.toString());

  //     // txtSend.orderConfirmed(order, () => {
  //     //   res.send(order);
  //     // })
  //   }
  // }
// });

module.exports = router;

