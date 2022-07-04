// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieSession = require('cookie-session');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({
  name: 'session',
  keys: ['1234'],
}));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");
// const ordersRoutes = require('./routes/orders');
// const placeOrderRoutes = require('./routes/place_order');
const menuRoutes = require('./routes/menu');
const adminLoginRoutes = require('./routes/admin_login');

// Mount all resource routes
app.use("/users", usersRoutes);
app.use("/widgets", widgetsRoutes);
// app.use('/orders', ordersRoutes);
// app.use('/placeorder', placeOrderRoutes);
app.use('/menu', menuRoutes);
// app.use('/login', adminLoginRoutes);

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  // admin id 2, change to whatever number you'd like here to see non-admin redirect
  req.session.user_id = 2;
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
