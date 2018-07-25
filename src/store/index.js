import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import bets from './bets';

const middleware = applyMiddleware(thunk, logger)

const reducer = combineReducers({ bets });

const store = createStore(reducer, middleware);

export default store;

export * from './bets';