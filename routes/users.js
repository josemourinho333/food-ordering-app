/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const { getMenuItems } = require('../db/menu-queries');
const router  = express.Router();
const userQueries = require('../db/user-queries');


// GET /users/
router.get('/', (req, res) => {
  console.log('loggin sessionid', req.session.user_id);
  if (req.session.user_id === 2) {
    userQueries.getUsers()
    .then((users) => {
      console.log('admin page right here');
      res.send('admin page');
      // return res.render('users', templateVars);
    })
    .catch((error) => {
      console.log(error.message);
    });
  } else {
    console.log('redirect');
    return res.redirect(`/users/${req.session.user_id}`);
  }
});

// GET /users/:id
router.get('/:id', (req, res) => {
  userQueries.getUserById(req.params.id)
    .then((user) => {
      const templateVars = {
        user,
      }
      return res.render('users', templateVars);
    })
    .catch((error) => {
      console.log(error.message);
    });
});

module.exports = router;
