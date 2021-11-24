import actionTypesBookingForm from '../actionTypes/bookingFormAT';

const bookingFormAction = {
  includeDataFromStartForm: (payload) => ({
    type: actionTypesBookingForm.INCLUDE_DATA_FROM_START_FORM,
    payload,
  }),

  includeNewDataFromSelectForm: (payload) => ({
    type: actionTypesBookingForm.INCLUDE_NEWDATA_FROM_SELECT_FORM,
    payload,
  }),

  addDataFromPersonalInfForm: (payload) => ({
    type: actionTypesBookingForm.ADD_DATA_FROM_PERSONAL_INF_FORM,
    payload,
  }),

  addSelectedRoomFromForm: (payload) => ({
    type: actionTypesBookingForm.ADD_SELECTED_ROOM_FROM_FORM,
    payload,
  }),
};

export default bookingFormAction;
