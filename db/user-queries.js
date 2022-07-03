// database connection to make queries possible
const db = require('./db-connect');

const getUsers = () => {
  return db.query(`SELECT * FROM users;`)
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const getUserById = (id) => {
  return db.query('SELECT * FROM users WHERE users.id = $1', [id])
    .then((response) => {
      return response.rows[0];
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = {
  getUsers,
  getUserById,
}

// List of queries
