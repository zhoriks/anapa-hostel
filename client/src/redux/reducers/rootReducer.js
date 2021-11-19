import { combineReducers } from 'redux';
import bookingsReducer from './bookingsReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  booking: bookingsReducer,
  login: loginReducer,
});

export default rootReducer;
