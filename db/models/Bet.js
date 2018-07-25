const conn = require('../conn');
const { Sequelize } = conn;

const Bet = conn.define('bet', {
  wager: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.STRING
  },
  event: {
    type: Sequelize.STRING
  }
});

module.exports = Bet;
