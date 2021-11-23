const months = {
  '01': 'Января',
  '02': 'Февраля',
  '03': 'Марта',
  '04': 'Апреля',
  '05': 'Мая',
  '06': 'Июня',
  '07': 'Июля',
  '08': 'Августа',
  '09': 'Сентября',
  // eslint-disable-next-line quote-props
  '10': 'Октября',
  // eslint-disable-next-line quote-props
  '11': 'Ноября',
  // eslint-disable-next-line quote-props
  '12': 'Декабря',
};

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

module.exports = { dateToTextFormat };
