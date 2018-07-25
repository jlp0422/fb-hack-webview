const conn = require('./conn');
const User = require('./models/User');
const Bet = require('./models/Bet');

Bet.belongsTo(User, { as: 'userOne'});
Bet.belongsTo(User, { as: 'userTwo'});

const syncAndSeed = () => {
  return conn.sync({ force: true });
}

module.exports = {
  syncAndSeed,
  conn,
  models: {
    User,
    Bet
  }
};
