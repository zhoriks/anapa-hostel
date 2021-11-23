import moment from 'moment';

// тут мы вычисляем итоговую сумму с учетом кол-ва ночей и цены за номер
// используем библиотеку moment.js
const totalSumForBooking = (arrivalDate, departureDate, price) => {
  if (!arrivalDate || !departureDate || !price) {
    return 'no info';
  }
  const firstDay = moment(arrivalDate);
  const lastDay = moment(departureDate);
  const nights = lastDay.diff(firstDay, 'days');
  const totalSum = (+nights) * (+price);
  return totalSum;
};

export default totalSumForBooking;
