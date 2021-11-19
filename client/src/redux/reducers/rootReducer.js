import { combineReducers } from 'redux';
import bookingsReducer from './bookingsReducer';
import loginReducer from './loginReducer';
import roomsReducer from './roomsReducer';

const rootReducer = combineReducers({
  booking: bookingsReducer,
  login: loginReducer,
  room: roomsReducer,
});

export default rootReducer;
