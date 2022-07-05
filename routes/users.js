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
// router.get('/', (req, res) => {
//   console.log('loggin sessionid', req.session.user_id);
//   if (req.session.user_id === 2) {
//     // need db/users queries
//     userQueries.getUsers()
//     .then((users) => {
//       console.log('admin page right here', users);
//       res.render('users', users.orders);
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
//   } else {
//     console.log('redirect');
//     return res.redirect(`/users/${req.session.user_id}`);
//   }
// });

// GET /users/ for ADMIN
router.get('/', (req, res) => {
  console.log('loggin sessionid', req.session.user_id);
  if (req.session.user_id === 2) {
    userQueries.getUserById(2)
    .then((user) => {
      const templateVars = {
        user,
      }
      return templateVars;
    }).then((templateVars) => {
      userQueries.getAllSentOrdersAsAdmin()
        .then((orders) => {
          templateVars.orders = orders;
          return templateVars;
        })
        .then((templateVars) => {
          console.log('here', templateVars);
          res.render('users', templateVars);

          // userQueries.getAllItemsInOrder(templateVars.orders[0].id)
          //   .then((orderItemsInTheLatestOrder) => {
          //     templateVars.latestOrderItems = orderItemsInTheLatestOrder;
          //     // ...what it looks like
          //     // tempV = {
          //     //   user,
          //     //   orders,
          //     //   latestOrderItems
          //     // }
          //     console.log("TEMP last order", templateVars.latestOrderItems);
          //     console.log("TEMP all order", templateVars.orders);
          //     console.log("TEMP user", templateVars.user);
          //     res.render('users', templateVars);
          //   })
        })
    })
    .catch((error) => {
      console.log(error.message);
    });



    // need db/users queries
    // userQueries.getUsers()
    // .then((users) => {
    //   console.log('admin page right here', users);
    //   res.render('users', users.orders);
    // })
    // .catch((error) => {
    //   console.log(error.message);
    // });
  } else {
    console.log('redirect');
    return res.redirect(`/users/${req.session.user_id}`);
  }
});


// GET /users/:id - finds user by :id, grabs all orders by the userID, then grabs order items of the latest order. Sent to Jesse now in templateVars.
router.get('/:id', (req, res) => {
  userQueries.getUserById(req.params.id)
    .then((user) => {
      const templateVars = {
        user,
      }
      return templateVars;
    })
    .then((templateVars) => {
      userQueries.getAllOrdersByUserId(templateVars.user.id)
        .then((orders) => {
          templateVars.orders = orders;
          return templateVars;
        })
        .then((templateVars) => {
          console.log('here', templateVars);
          userQueries.getAllItemsInOrder(templateVars.orders[0].id)
            .then((orderItemsInTheLatestOrder) => {
              templateVars.latestOrderItems = orderItemsInTheLatestOrder;
              // ...what it looks like
              // tempV = {
              //   user,
              //   orders,
              //   latestOrderItems
              // }
              console.log("TEMP last order", templateVars.latestOrderItems);
              console.log("TEMP all order", templateVars.orders);
              console.log("TEMP user", templateVars.user);
              res.render('users', templateVars);
            })
        })
    })
    .catch((error) => {
      console.log(error.message);
    });
});

module.exports = router;
