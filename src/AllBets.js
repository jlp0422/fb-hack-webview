import React from 'react';
import { Label, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { updateBetOnServer } from './store';

class AllBets extends React.Component {
  constructor() {
    super();
  }

  onAddUserToBet(id, bet) {
    const { userOneFacebookId, stake, wager } = bet;
    const { updateBet } = this.props;
    updateBet({ user1Id: userOneFacebookId, user2Id: id });
  }

  render() {
    const { onAddUserToBet } = this;
    const { bets, users, user } = this.props;
    return (
      <div style={ styles.container }>
        <h2>All Bets</h2>
        <div>
          {
            bets.map(bet => {
              const user1 = users.find(user => user.facebookId === bet.userOneFacebookId);
              const style = bet.userTwoFacebookId ? 'default' : 'primary';
              return (
                <div key={bet.id}>
                  <h1><Label bsStyle={ style }>{ bet.wager }<br />{ bet.stake }<br />{ user1.first_name }</Label></h1>
                  <Button disabled={ style === 'default'} onClick={() => onAddUserToBet(user.facebookId, bet)}>Take Bet!</Button>
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

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }
}
