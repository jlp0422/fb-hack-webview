const conn = require('../conn');
const { Sequelize } = conn;
const User = conn.models.user;
const { Op } = Sequelize;

const Bet = conn.define('bet', {
  stake: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: 'open'
  },
  wager: {
    type: Sequelize.STRING
  }
});

Bet.findOrCreateBet = function(user1Id, wager, stake) {
  return Bet.find({
    where: {
      userOne: user1Id,
      wager,
      stake,
      status: 'open'
    }
  })
    .then(bet => {
      if(bet) {
        return bet;
      }
      return Bet.create({
        userOne: user1Id,
        wager,
        stake
      });
    });
};

Bet.acceptBet = function(user1Id, user2Id, wager, stake) {
  return Bet.find({
    where: {
      userOne: {
        [Op.or]: [user1Id, user2Id]
      },
      userTwo: {
        [Op.or]: [user1Id, user2Id]
      },
      wager,
      stake,
      status: 'open'
    }
  })
    .then(bet => {
      if(bet) {
        return bet;
      } else {
        throw { status: 404 };
      }
    });
};

module.exports = Bet;
