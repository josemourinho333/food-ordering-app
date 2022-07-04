const express = require('express');
const router = express.Router();

// subject to change per Denis
const menuQueries = require('../db/menu-queries');

// get /menu/ - will create new order and display menu items.
router.get('/', (req, res) => {
  // db query to create new order - needs changed once Denis is done
  menuQueries.addNewOrder(req.session.user_id)
    .then((newOrder) => {
      menuQueries.getMenuItems()
        .then((menuItems) => {
          const templateVars = {
            newOrder,
            menuItems,
          }
          console.log('templatevars', templateVars.newOrder);
          // needs to menu/orders/:id here and pass data.
          res.render(`testmenuid.ejs`, templateVars)
        })
    })
    .catch((error) => {console.log(error)});
});

// post /menu/add - add to cart posts.
router.post('/add', (req, res) => {
  console.log('reqbody', req.body);
  // need a query to find order based on req.body.user_id
  // group req.body info and req.params.id into one obj.
  const orderItem = {
    quantity: req.body.quantity,
    itemId: req.body.itemID,
    orderId: 18
  }
  // db query to insert this obj into orders_items
  menuQueries.addNewItem(orderItem)
    //should get back inserted order_item but take the order_id.
    .then((item) => {
      return item;
    })
    .then((item) => {
      menuQueries.getMenuItems()
        .then((menuItems) => {
          const templateVars = {
            orderId: item.order_id,
            menuItems
          }
          console.log('varrrrr', templateVars.orderId);
          // here need to render again with the same /menu/order/:id
          res.render('testmenuid.ejs', templateVars);
        })
    })
    .catch((error) => {console.log(error.message)});
});

module.exports = router;
