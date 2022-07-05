const express = require('express');
const router = express.Router();
const txtSend = require('../twilio/twilio-queries');

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

// POST /menu/order/submit - user clicks place order b utton and places the order. Twilio stuff should happen here
// router.post('/order/submit', (req, res) => {

//   console.log('am i getting the right info?', req.body);
//   // global variable for easier access.
//   let confirmedOrderID;
//   // pass in the orderID from post request
//   userQueries.updateStatusWhenOrderSent(req.body.orderID)
//     // get back the order that got updated (status_sent now TRUE)
//     .then((confirmedOrder) => {
//       console.log('order confirmed', confirmedOrder);
//       // assign the orderID to the global variable
//       confirmedOrderID = confirmedOrder[0].id;
//       // Txt will be sent now to the owner to confirm the order by replying with ETA
//       const order = txtSend.newOrder(confirmedOrderID);
//           // another post request for handling incoming SMS to twilio. Makes the previous POST hang until this new one gets a response.
//           router.post('/order/submit/sms', (request, response) => {
//             // my reply is assigned to ETA
//             const ETA = request.body.Body;

//             txtSend.orderConfirmed(ETA, () => {
//               console.log('eta in the callback', ETA);
//               console.log('confirmedorderID', confirmedOrderID);

//               if (!ETA) {
//                 reject('nope');
//               }
//               // sending response to end the post request.
//               response.send(ETA);
//               // redirecting the user to a new page where they can see their order.
//               res.redirect(`/users/2`);
//             });
//           })
//     })
//     .catch((error) => {console.log(error.message)});
// });

// testing version
router.post('/order/submit', (req, res) => {

  console.log('am i getting the right info?', req.body);
  // global variable for easier access.
  let confirmedOrderID;
  // pass in the orderID from post request
  userQueries.updateStatusWhenOrderSent(req.body.orderID)
    // get back the order that got updated (status_sent now TRUE)
    .then((confirmedOrder) => {
      console.log('order confirmed', confirmedOrder);
      // assign the orderID to the global variable
      confirmedOrderID = confirmedOrder[0].id;
      // Txt will be sent now to the owner to confirm the order by replying with ETA
      const order = txtSend.newOrder(confirmedOrderID);
          // another post request for handling incoming SMS to twilio. Makes the previous POST hang until this new one gets a response.
          router.post('/order/submit/sms', (request, response) => {
            // my reply is assigned to ETA
            const ETA = request.body.Body;
            console.log('confirmedorderID', confirmedOrderID);
            userQueries.updateStatusOwnerConfirm(confirmedOrderID, ETA)
              .then((result) => {
                console.log('set new pu time', result[0]);
                txtSend.orderConfirmed(ETA, () => {

                  if (!ETA) {
                    reject('nope');
                  }
                  // sending response to end the post request.
                  response.send(ETA);
                  // redirecting the user to a new page where they can see their order.
                  res.redirect(`/users/${req.session.user_id}`);
                });
              })
              .catch((error) => {console.log(error.message)});
          })
    })
    .catch((error) => {console.log(error.message)});
});

module.exports = router;
