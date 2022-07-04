/// WORK IN PROGRESS IGNORE.
// currently not in use

const express = require('express');
const router = express.Router();
const placeOrderQueries = require('../db/place-order-queries');

// GET /order/ - customer sees the menu basically
router.get('/', (req, res) => {
  placeOrderQueries.getMenuItems()
    .then((menuItems) => {
      res.json(menuItems);
    })
    .catch((error) => {console.log(error.message)});
});

// GET /order/item?:id - customer clicked on a specific item - maybe not needed?
router.get('/item/:id', (req, res) => {
  placeOrderQueries.getItem(req.params.id)
    .then((item) => {
      res.json(item);
    })
    .catch((error) => {console.log(error.message)});
});


// POST /order/submit - customer clicked place order button
router.post('/submit', (req, res) => {
  // set cookie here
  // send it off to createOrder(...req.body, user_id: userId)
  // .then(() => render).catch(() => error)
  placeOrderQueries.createOrder(
    {
      user_id: userId,


    }
  )
    .then((newOrder) => {
      res.json(newOrder);
    })
    .catch((error) => {console.log(error.message)});
});

module.exports = router;
