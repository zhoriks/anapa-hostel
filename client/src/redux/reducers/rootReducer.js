import { combineReducers } from 'redux';
import bookingFormReducer from './bookingFormReducer';
import bookingsReducer from './bookingsReducer';
import guestReducer from './guestReducer';
import loginReducer from './loginReducer';
import roomsReducer from './roomsReducer';
import reviewsTickerReducer from './reviewsTickerReducer';

const rootReducer = combineReducers({
  booking: bookingsReducer,
  login: loginReducer,
  room: roomsReducer,
  bookingForm: bookingFormReducer,
  guest: guestReducer,
  reviews: reviewsTickerReducer,
});

export default rootReducer;
