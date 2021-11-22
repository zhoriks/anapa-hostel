import actionTypesBookingForm from '../actionTypes/bookingFormAT';

const bookingFormAction = {
  includeDataFromStartForm: (payload) => ({
    type: actionTypesBookingForm.INCLUDE_DATA_FROM_START_FORM,
    payload,
  }),

  addDataFromPersonalInfForm: (payload) => ({
    type: actionTypesBookingForm.ADD_DATA_FROM_PERSONAL_INF_FORM,
    payload,
  }),
};

export default bookingFormAction;
