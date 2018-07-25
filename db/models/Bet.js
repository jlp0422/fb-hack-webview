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

// Bet.findOrCreateBet = function(user1Id, wager, stake) {
//   return Bet.find({
//     where: {
//       userOneFacebookId: user1Id,
//       wager,
//       stake,
//       status: 'open'
//     }
//   })
//     .then(bet => {
//       if(bet) {
//         return bet;
//       }
//       return Bet.create({
//         userOneFacebookId: user1Id,
//         wager,
//         stake
//       })

//     });
// };

Bet.acceptBet = function(user1Id, user2Id) {
  return Bet.find({
    where: {
      userOneFacebookId: user1Id
    }
  })
    .then(bet => {
      return bet.update({
        userTwoFacebookId: user2Id
      });
    });
};

module.exports = Bet;
