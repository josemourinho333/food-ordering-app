const express = require('express');
const router = express.Router();

// subject to change per Denis
const menuQueries = require('../db/menu-queries');
const userQueries = require('../db/user-queries');


/// CONCERN : need to alert when user adds items to cart then clicks menu link again.

// get /menu/ - will create new order and display menu items.
router.get('/', (req, res) => {

  userQueries.createOrder(req.session.user_id)
    .then((newOrder) => {
      menuQueries.getMenuItems()
        .then((menuItems) => {
          const templateVars = {
            newOrder,
            menuItems,
          }
          console.log('templatevars', templateVars.newOrder);
          res.render(`menu`, templateVars)
        })
    })
    .catch((error) => {console.log(error)});
});

// post /menu/add - add items to order_items table to be called upon later for placing order.
router.post('/add', (req, res) => {
  console.log('reqbody', req.body);
  userQueries.getAllOrdersByUserId(req.session.user_id)
    .then((orders) => {
      const orderID = orders[orders.length - 1].id;
      const itemID = req.body.itemID;
      const quantity = req.body.quantity;

      userQueries.addItemToOrder(orderID, itemID, quantity)
        .then((result) => {
          console.log('result', result);
          userQueries.getAllItemsInOrder(result[0].order_id)
            .then((ordered) => {
              return ordered;
            })
            .then((ordered) => {
              menuQueries.getMenuItems()
                .then((menuItems) => {
                  const templateVars = {
                    menuItems,
                    ordered,
                  }
                  console.log('**tempv**', templateVars.ordered);
                  res.render('menu', templateVars);
                })
            })
        })
    })
    .catch((error) => {console.log(error)});
});

// GET /menu/order - takes user to checkout that displays all items in an order
router.get('/order', (req, res) => {
  userQueries.getAllOrdersByUserId(req.session.user_id)
    .then((orders) => {
      console.log('from 1st query', orders[orders.length - 1]);
      const currentOrderID = orders[orders.length - 1].id;
      userQueries.getAllItemsInOrder(currentOrderID)
        .then((items) => {
          const templateVars = {
            items,
          }
          console.log('items in an order', templateVars);
          res.render('neeeeed ejs file name here', templateVars)
        })
    })
});

// need twilio
const txtSend = require('../twilio/twilio-queries');

//TESTING
const MessagingResponse = require('twilio').twiml.MessagingResponse;
// POST /menu/order/submit - user clicks place order b utton and places the order. Twilio stuff should happen here
router.post('/order/submit', (req, res) => {
  const test = 73;
  userQueries.updateStatusWhenOrderSent(test)
    .then((confirmedOrder) => {
      console.log('order confirmed', confirmedOrder);
    })
    .catch((error) => {console.log(error.message)});
  // console.log(req.body);

  // const twiml = new MessagingResponse();
  // twiml.message('the robots are coming');

  // res.writeHead(200, {'Content-Type': 'text/xml'});
  // res.end(twiml.toString());


  // txtSend.newOrder(test)
  //   .then((result) => {
  //     console.log('result', result);
  //     txtSend.replyFromOwner();
  //   })
  //   .catch((error) => {console.log(error)});
})

module.exports = router;
