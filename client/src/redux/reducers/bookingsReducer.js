import actionTypesBookings from '../actionTypes/bookingsAT';

const initialState = {
  list: [],
};
// eslint-disable-next-line default-param-last
const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypesBookings.INIT_BOOKINGS:
      return {
        ...state,
        list: [...action.payload],
      };

    default:
      return state;
  }
};

export default bookingsReducer;
