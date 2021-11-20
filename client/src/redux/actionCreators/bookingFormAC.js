import actionTypesBookingForm from '../actionTypes/bookingFormAT';

const bookingFormAction = {
  findPlace: () => ({ type: actionTypesBookingForm.FIND_PLACE_START }),
};

export default bookingFormAction;
