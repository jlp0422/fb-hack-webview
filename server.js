const express = require('express')
const path = require('path')
const app = express();
const { syncAndSeed, models } = require('./db');
const Sequelize = require('sequelize');
const { Op } = Sequelize;
const { Bet, User } = models;
const axios = require('axios');

syncAndSeed();

app.use(require('body-parser').json());
app.use(express.static(path.join(__dirname, './public')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/bets', (req, res) => {
  Bet.findAll()
    .then(bets => res.send(bets));
});

app.post('/enter', (req, res) => {
  const { user1Id, wager, stake } = req.body;
  let bet;
  Bet.create({
    userOneFacebookId: user1Id,
    wager,
    stake
  })
    .then(_bet => bet = _bet)
    .then(() => {
      return User.find({
        where: {
          facebookId: user1Id
        }
      })
    }).then(user => {
      console.log(user)
      axios.post('https://fb-hack-server.herokuapp.com/webhook', { first_name: user.name, wager, stake});
    }).then(() => res.send(bet));
});

app.post('/accept', (req, res) => {
  const { user1Id, user2Id } = req.body;
  Bet.acceptBet(user1Id, user2Id)
    .then(bet => res.send(bet));
});

app.post('/create', (req, res) => {
  const { id, first_name, last_name, profile_pic } = req.body;
  console.log(req.body);
  User.findOrCreate({
    where: {
      facebookId: id,
      first_name,
      last_name,
      profile_pic
    }
  })
    .then(user => {
      res.send(user[0])})
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`port of call: ${port}`));
