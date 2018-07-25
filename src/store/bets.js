import axios from 'axios';

const GET_BETS = 'GET_BETS';
const CREATE_BET = 'CREATE_BET';

const getBets = (bets) => ({ type: GET_BETS, bets });
const createBet = (bet) => ({ type: CREATE_BET, bet });

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

// export const updateBetOnServer = (bet) => {
//   return dispatch => {
//     return axios.post(`/api/bets/${bet.id}`, bet)
//       .then(res => res.data)
//       .then(bet => dispatch(createBets(bet)))
//   }
// }

const store = (state = [], action) => {
  switch(action.type) {
  case GET_BETS:
    return action.bets;
  case CREATE_BET:
    return [ ...state, action.bet ];
  default:
    return state;
  }
}

export default store;
