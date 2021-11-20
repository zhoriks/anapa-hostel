import { combineReducers } from 'redux';
import bookingFormReducer from './bookingFormReducer';
import bookingsReducer from './bookingsReducer';
import loginReducer from './loginReducer';
import roomsReducer from './roomsReducer';

const rootReducer = combineReducers({
  booking: bookingsReducer,
  login: loginReducer,
  room: roomsReducer,
  bookingForm: bookingFormReducer,
});

export default rootReducer;
