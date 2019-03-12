import { combineReducers } from 'redux';

import appState from './appState';
import user from './user';

const reducers = combineReducers({
  appState,
  user,
});

export default reducers;
