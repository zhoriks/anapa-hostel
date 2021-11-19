import actionTypesBookings from '../actionTypes/bookingsAT';

const initialState = {
  list: [],
  error: null,
};
// eslint-disable-next-line default-param-last
const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypesBookings.INIT_BOOKINGS_START:
      return {
        ...state,
        list: [...action.payload],
      };
    case actionTypesBookings.INIT_BOOKINGS_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
      };
    case actionTypesBookings.INIT_BOOKINGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default bookingsReducer;
