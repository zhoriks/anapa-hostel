import { combineReducers } from 'redux';
import bookingFormReducer from './bookingFormReducer';
import bookingsReducer from './bookingsReducer';
import guestReducer from './guestReducer';
import loginReducer from './loginReducer';
import roomsReducer from './roomsReducer';
import reviewsTickerReducer from './reviewsTickerReducer';
import reviewsFormReducer from './reviewsFormReducer';
import adminReviewsReducer from './adminReviewsReducer';
import cleaningReducer from './cleaningReducer';

const rootReducer = combineReducers({
  booking: bookingsReducer,
  login: loginReducer,
  room: roomsReducer,
  bookingForm: bookingFormReducer,
  guest: guestReducer,
  reviews: reviewsTickerReducer,
  newReview: reviewsFormReducer,
  adminReviews: adminReviewsReducer,
  cleaning: cleaningReducer,
});

export default rootReducer;
