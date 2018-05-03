// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  router,
  todos,
});

export default rootReducer;
