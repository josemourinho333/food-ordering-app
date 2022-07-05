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
            ordered:[]
          }
          res.render(`menu`, templateVars)
        })
    })
    .catch((error) => {console.log(error)});
});

// post /menu/add - add items to order_items table to be called upon later for placing order.
// router.post('/add', (req, res) => {
//
//   console.log('reqbody', req.body);
//   userQueries.getAllOrdersByUserId(req.session.user_id)
//     .then((orders) => {
//       const orderID = orders[orders.length - 1].id;
//       const itemID = req.body.itemID;
//       const quantity = req.body.quantity;

//       userQueries.addItemToOrder(orderID, itemID, quantity)
//         .then((result) => {
//           console.log('result', result);
//           menuQueries.getMenuItems()
//             .then((menuItems) => {
//               const templateVars = {
//                 menuItems,
//               }
//               console.log("POST",templateVars);
//               res.render('menu', templateVars);
//             })
//         })
//     })
//     .catch((error) => {console.log(error)});
// });

router.post('/add', (req, res) => {
  console.log('reqbody', req.body);
  userQueries.getAllOrdersByUserId(req.session.user_id)
    .then((orders) => {
      // console.log('***', orders);
      // console.log('orderID', orders[0].id);

      const orderInfo = {
        orderId: orders[0].id,
        itemId: req.body.itemID,
        quantity: req.body.quantity,
      };

      userQueries.addItemToOrder(orderInfo)
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
      console.log('from 1st query', orders[0]);
      const currentOrderID = orders[0].id;
      userQueries.getAllItemsInOrder(currentOrderID)
        .then((items) => {
          const templateVars = {
            items,
          }
          console.log('tempv in /order', templateVars);
          res.render(`orders`, templateVars)
        })
    })
});



// need twilio
const txtSend = require('../twilio/twilio-queries');

// //TESTING
// const MessagingResponse = require('twilio').twiml.MessagingResponse;
// POST /menu/order/submit - user clicks place order b utton and places the order. Twilio stuff should happen here
router.post('/order/submit', (req, res) => {
  // update the order first to status sent = true. need to req.body.order_id.
  const test = 66;
  let confirmedOrderID;
  userQueries.updateStatusWhenOrderSent(test)
    .then((confirmedOrder) => {
      console.log('order confirmed', confirmedOrder);
      confirmedOrderID = confirmedOrder[0].id;
      const order = txtSend.newOrder(confirmedOrderID);

          router.post('/order/submit/sms', (request, response) => {

            const ETA = request.body.Body;

            txtSend.orderConfirmed(ETA, () => {
              console.log('eta in the callback', ETA);
              console.log('confirmedorderID', confirmedOrderID);

              if (!ETA) {
                reject('nope');
              }
              response.send(ETA);
              res.send('outside');
            });
          })
    })
    .catch((error) => {console.log(error.message)});
})

module.exports = router;
