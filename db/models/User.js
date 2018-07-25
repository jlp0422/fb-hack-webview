const conn = require('../conn');
const { Sequelize } = conn;

const User = conn.define('user', {
  facebookId: {
    type: Sequelize.STRING,
  },
  token: {
    type: Sequelize.STRING
  }
})

module.exports = User;
