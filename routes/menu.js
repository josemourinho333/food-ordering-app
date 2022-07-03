const express = require('express');
const router = express.Router();

// subject to change per Denis
const menuQueries = require('../db/menu-queries');

// get /menu/ - display menu items
router.get('/', (req, res) => {
  // need db/menu queries
  menuQueries.getMenuItems()
    .then((menuItems) => {
      const templateVars = {
        menuItems,
      }
      res.render('menu', templateVars);
    })
    .catch((error) => {
      console.log(error.message);
    });
});

module.exports = router;
