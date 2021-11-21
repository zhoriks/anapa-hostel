import actionTypesBookingForm from '../actionTypes/bookingFormAT';

const bookingFormAction = {
  includeDataFromStartForm: (payload) => ({
    type: actionTypesBookingForm.INCLUDE_DATA_FROM_START_FORM,
    payload,
  }),
};

export default bookingFormAction;
