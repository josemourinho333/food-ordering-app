/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const widgetQueries = require('../db/widget-queries');

// GET /widgets/
router.get('/', (req, res) => {
  widgetQueries.getWidgets()
    .then((widgets) => {
      res.json(widgets);
    })
    .catch((error) => {
      error.message
    });
});

// GET /widgets/:id
router.get('/:id', (req, res) => {
  widgetQueries.getWidgetById(req.params.id)
    .then((widget) => {
      res.json(widget);
    })
    .catch((error) => {
      console.log(error.message);
    });
});

module.exports = router;

