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
          res.render(`menu`, templateVars)
        })
    })
    .catch((error) => {console.log(error)});
});

// post /menu/orders/:id - add to cart posts.
router.post('/', (req, res) => {
  console.log('reqbody', req.body);
  // group req.body info and req.params.id into one obj.
  const orderItem = {
    quantity: req.body.quantity,
    itemId: req.body.itemID,
    // needs to be replaced with req.params.id instead of number.
    orderId: 30
  }
  // db query to insert this obj into orders_items
  menuQueries.addNewItem(orderItem)
    //should get back inserted order_item but take the order_id.
    .then(() => {
      // here need to render again with the same /menu/order/:id
      res.render(`menu`);
    })
    .catch((error) => {console.log(error.message)});
});

module.exports = router;
