import moment from 'moment';

const totalSumForBooking = (arrivalDate, departureDate, price) => {
  if (!arrivalDate || !departureDate || !price) {
    return 'no info';
  }
  const firstDay = moment(arrivalDate);
  const lastDay = moment(departureDate);
  const nights = lastDay.diff(firstDay, 'days');
  return nights;
};

export default totalSumForBooking;
