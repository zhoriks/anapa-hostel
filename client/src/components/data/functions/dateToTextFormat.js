// функция для приведения даты в стейте в более читаемый вид формата '20 Ноября' вместо 2021-11-20
import months from '../helpData/months';

const dateToTextFormat = (fullDate) => {
  if (!fullDate) {
    return 'no info';
  }
  const day = fullDate.split('-')[2];
  const month = fullDate.split('-')[1];
  const monthText = months[month];
  const textFormatDate = `${day} ${monthText}`;
  return textFormatDate;
};

export default dateToTextFormat;
