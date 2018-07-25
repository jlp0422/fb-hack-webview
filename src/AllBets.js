import React from 'react';
import { connect } from 'react-redux';

class AllBets extends React.Component {
  constructor() {
    super();
  }

  onAddUserToBet(id, bet) {
    const { id, stake, wager }
  }

  render() {
    const { onAddUserToBet } = this;
    const { bets, users, user } = this.props;
    console.log(bets);
    return (
      <div>
        <h2>All Bets</h2>
        <div>
          {
            bets.map(bet => {
              const user1 = users.find(user => user.facebookId === bet.userOneFacebookId);
              return (
                <div key={bet.id}>
                  {bet.wager} {bet.stake} {user1.first_name} {user1.last_name}
                  <button onClick={() => onAddUserToBet(user.facebookId, bet)}>Take Bet!</button>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

const mapState = ({ user, users, bets }) => {
  console.log(bets);
  return {
    bets,
    users,
    user
  }
}

const mapDispatch = (dispatch) => {
  return {
    updateBet: (bet) => dispatch(updateBetOnServer(bet))
  }
}

export default connect(mapState, mapDispatch)(AllBets);