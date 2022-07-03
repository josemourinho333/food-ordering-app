/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

// Subject to change per Denis
const userQueries = require('../db/user-queries');


// GET /users/
router.get('/', (req, res) => {
  console.log('loggin sessionid', req.session.user_id);
  if (req.session.user_id === 2) {
    // need db/users queries
    userQueries.getUsers()
    .then((users) => {
      console.log('admin page right here');
      res.send('admin page');
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
  // need db/users queries here
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
