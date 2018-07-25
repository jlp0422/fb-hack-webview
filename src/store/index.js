import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';

import bets from './bets';
import user, { gotUser } from './user';

const middleware = applyMiddleware(thunk, logger);

const reducer = combineReducers({ bets, user });

const store = createStore(reducer, middleware);

export const getUser = id => {
  axios.get(`https://graph.facebook.com/${id}?fields=first_name,last_name,profile_pic&access_token=EAADE4ZC13Pr0BAI2LMZCosTBl6dWdZC9ZByGY9iuzXZBQpPJl5X5iZBPhcuZCYkhFMH5x3uNKYMBm7Qi3hNMQaP8SZAzCZCKanu4tHt7qz2PZAn30myd0ZBDtr6ATbJ22BGcC3CUaFUajrXrsKCNJpotHip4xkZBUjoeeJoZBCFel6VwRkAZDZD`)
    .then(response => {
      const profile = response.data;
      profile.id = id;
      return axios.post('/create', profile);
    })
    .then(user => {
      console.log(user)
      store.dispatch(gotUser(user))
    });
};

export default store;

export * from './bets';
