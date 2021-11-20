import actionTypesBookingForm from '../actionTypes/bookingFormAT';

const initialState = {
  list: { arrivalDate: null, departureDate: null, guestNumber: null },
  error: null,
};

// eslint-disable-next-line default-param-last
const bookingFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypesBookingForm.INCLUDE_DATA_FROM_START_FORM:
      return {
        ...state,
        list: {
          ...state.list,
          arrivalDate: action.payload.arrivalDate,
          departureDate: action.payload.departureDate,
          guestNumber: action.payload.guestNumber,
        },
      };

    default:
      return state;
  }
};

export default bookingFormReducer;
