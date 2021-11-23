import actionTypesBookings from '../actionTypes/bookingsAT';

const initialState = {
  list: [],
  editForm: false,
  error: null,
};
// eslint-disable-next-line default-param-last
const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypesBookings.INIT_BOOKINGS_START:
      return {
        ...state,
        error: null,
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
    case actionTypesBookings.EDIT_FORM_TOGGLE_BUTTON:
      return {
        ...state,
        editForm: !state.editForm,
        error: null,
      };
    case actionTypesBookings.EDIT_FORM_SUBMIT_STOP:
      return {
        ...state,
        editForm: false,
        error: null,
      };
    case actionTypesBookings.EDIT_FORM_SUBMIT_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
      };
    case actionTypesBookings.EDIT_FORM_SUBMIT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypesBookings.CREATE_BOOKING_START:
      return {
        ...state,
        editForm: false,
        error: null,
      };
    case actionTypesBookings.CREATE_BOOKING_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
      };
    case actionTypesBookings.CREATE_BOOKING_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default bookingsReducer;
