import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import socketMiddleware from './middleware/socket-middleware';

import rootReducer from './root-reducer';

const middlewares = [socketMiddleware('http://127.0.0.1:3001')];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;