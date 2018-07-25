const express = require('express')
const path = require('path')
const app = express();
const { syncAndSeed, models } = require('./db');
const { Bet } = models;

syncAndSeed();

app.use(express.static(path.join(__dirname, './public')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/bets', (req, res) => {
  Bet.findAll()
    .then(bets => res.send(bets));
});

app.post('/enter', (req, res) => {
  console.log(req.body)
  const { user1Id, wager, stake } = req.body.bet;
  Bet.findOrCreateBet(user1Id, null, wager, stake)
    .then(bet => res.send(bet));
});

app.post('/accept', (req, res) => {
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`port of call: ${port}`));
