const express = require('express')
const path = require('path')
const app = express();
const { syncAndSeed, models } = require('./db');
const { Bet, User } = models;

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
  Bet.findOrCreateBet(user1Id, wager, stake)
    .then(bet => res.send(bet));
});

app.post('/accept', (req, res) => {
  const { user1Id, user2Id, wager, stake} = req.body;
  Bet.acceptBet(user1Id, user2Id, wager, stake)
    .then(bet => res.send(bet));
});

app.post('/create', (req, res) => {
  const { id, first_name, last_name, profile_pic } = req.body;
  User.findOrCreate({
    where: {
      facebookId: id,
      first_name,
      last_name,
      profile_pic
    }
  })
    .then(user => res.send(user[0]));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`port of call: ${port}`));
