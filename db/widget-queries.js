const db = require('./db-connect');

const getWidgets = () => {
  return db.query('SELECT * FROM widgets;')
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const getWidgetById = (id) => {
  return db.query(`SELECT * FROM widgets WHERE id = $1`, [id])
   .then((response) => {
    return response.rows[0];
   })
   .catch((error) => {
    console.log(error.message);
   });
};

module.exports = {
  getWidgets,
  getWidgetById,
}
