const conn = require('../conn');
const { Sequelize } = conn;

const User = conn.define('user', {
  facebookId: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  first_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  },
  profile_pic: {
    type: Sequelize.STRING
  }
});

// User.findOrCreateUser = function(id, firstName, lastName, pic) {
//   return User.find({
//     where: {
//       facebookId: id
//     }
//   })
//     .then(user => {
//       if(user) {
//         return user;
//       }
//       return User.create({
//         facebookId: id,
//         firstName,
//         lastName,
//         pic
//       })
//         .then(() => {
//           return User.find({
//             where: {
//               facebookId: id
//             }
//           });
//         });
//     });
// };

module.exports = User;
