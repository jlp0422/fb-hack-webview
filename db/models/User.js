const conn = require('../conn');
const { Sequelize } = conn;

const User = conn.define('user', {
  facebookId: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  token: {
    type: Sequelize.STRING
  }
});

module.exports = User;
