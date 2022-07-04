const express = require('express');
const router = express.Router();

// subject to change per Denis
const menuQueries = require('../db/menu-queries');
const userQueries = require('../db/user-queries');


/// CONCERN : need to alert when user adds items to cart then clicks menu link again.

// get /menu/ - will create new order and display menu items.
router.get('/', (req, res) => {

  menuQueries.addNewOrder(req.session.user_id)
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
          menuQueries.getMenuItems()
            .then((menuItems) => {
              const templateVars = {
                menuItems,
              }
              res.render('menu', templateVars);
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

module.exports = router;
