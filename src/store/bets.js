import axios from 'axios';

const GET_BETS = 'GET_BETS';
const CREATE_BET = 'CREATE_BET';
const UPDATE_BET = 'UPDATE_BET';

const getBets = (bets) => ({ type: GET_BETS, bets });
const createBet = (bet) => ({ type: CREATE_BET, bet });
const updateBet = (bet) => ({ type: UPDATE_BET, bet });

export const getBetsFromServer = () => {
  return dispatch => {
    return axios.get('/bets')
      .then(res => res.data)
      .then(bets => dispatch(getBets(bets)));
  };
};

export const createBetOnServer = (bet) => {
  return dispatch => {
    return axios.post('/enter', bet)
      .then(res => res.data)
      .then(bet => dispatch(createBet(bet)))
  }
}

export const updateBetOnServer = (bet) => {
  const{ user1Id, user2Id } = bet;
  return dispatch => {
    return axios.post('/accept', { user1Id, user2Id })
      .then(res => res.data)
      .then(bet => dispatch(updateBet(bet)))
  }
}

const store = (state = [], action) => {
  let bets;
  switch(action.type) {
    case GET_BETS:
      return action.bets;
    case CREATE_BET:
      return [ ...state, action.bet ];
    case UPDATE_BET:
      bets = state.filter(bet => bet.id === action.bet.id)
      return [ ...bets, action.bet ];
    default:
      return state;
  }
}

export default store;
