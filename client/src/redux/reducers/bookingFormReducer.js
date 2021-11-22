import actionTypesBookingForm from '../actionTypes/bookingFormAT';

const initialState = {
  list: {
    arrivalDate: null,
    departureDate: null,
    guestNumber: null,
    surname: null,
    name: null,
    patronymic: null,
    email: null,
    phone: null,
    wantPhoneNotice: false,
    wandGetAds: false,
    guestComment: null,
  },
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

    case actionTypesBookingForm.ADD_DATA_FROM_PERSONAL_INF_FORM:
      return {
        ...state,
        list: {
          ...state.list,
          surname: action.payload.surname,
          name: action.payload.name,
          patronymic: action.payload.patronymic,
          email: action.payload.email,
          phone: action.payload.phone,
          wantPhoneNotice: action.payload.wantPhoneNotice,
          wandGetAds: action.payload.wandGetAds,
          guestComment: action.payload.guestComment,
        },
      };

    default:
      return state;
  }
};

export default bookingFormReducer;
