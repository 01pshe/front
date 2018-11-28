
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import combinedReducer from './reducers.js';

 const history = ConnectedRouter.createHistory();

const middleware = [
  thunkMiddleware,
  routerMiddleware(history)
];

const defaultApplyMiddleware = applyMiddleware(...middleware );

const reducer = combineReducers({
  routing: routerReducer,
  app: combinedReducer
});

export default function configureStore( initialState ) {
  return createStore( reducer, initialState, defaultApplyMiddleware);
};
