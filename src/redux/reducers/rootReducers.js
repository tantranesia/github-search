// ** Redux Imports
import { combineReducers } from 'redux';

// import Reducers
import userReducer from './user';
import repoReducers from './repo';

const appReducer = combineReducers({
  user: userReducer,
  repo: repoReducers,
});

export default appReducer;
