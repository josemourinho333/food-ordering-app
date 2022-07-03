const express = require('express');
const router = express.Router();

// subject to change per Denis
const menuQueries = require('../db/menu-queries');

// get /menu/ - display menu items
router.get('/', (req, res) => {
  menuQueries.getMenuItems()
    .then((menuItems) => {
      const templateVars = {
        menuItems,
      }
      console.log('from tv',menuItems);
      res.render('menu', menuItems);
    })
    .catch((error) => {
      console.log(error.message);
    });
});

module.exports = router;
