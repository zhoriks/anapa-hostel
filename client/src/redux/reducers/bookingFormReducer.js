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
    vacantRooms: [],
    selectedRoom: null,
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

    case actionTypesBookingForm.ADD_SELECTED_ROOM_FROM_FORM:
      return {
        ...state,
        list: {
          ...state.list,
          selectedRoom: action.payload,
        },
      };

    case actionTypesBookingForm.SEND_DATES_IN_DB_START:
      return {
        ...state,
        error: null,
      };

    case actionTypesBookingForm.SEND_DATES_IN_DB_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const array = [...action.payload.aviableRooms];
      return {
        ...state,
        list: {
          ...state.list,
          vacantRooms: array,
        },
      };

    case actionTypesBookingForm.SEND_DATES_IN_DB_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default bookingFormReducer;
