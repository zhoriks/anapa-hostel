import { combineReducers } from 'redux';
import bookingsReducer from './bookingsReducer';

const rootReducer = combineReducers({
  booking: bookingsReducer,
});

export default rootReducer;
