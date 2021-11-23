const actionTypesBookingForm = {
  // собираем данные из форм в стейт
  INCLUDE_DATA_FROM_START_FORM: 'INCLUDE_DATA_FROM_START_FORM', // выбор дат и кол-ва гостей
  ADD_DATA_FROM_PERSONAL_INF_FORM: 'ADD_DATA_FROM_PERSONAL_INF_FORM', // перс.информация
  ADD_SELECTED_ROOM_FROM_FORM: 'ADD_SELECTED_ROOM_FROM_FORM', // выбранная комната
  // отправляем на бэк через сагу даты, выбранные в форме клиентом
  SEND_DATES_IN_DB_START: 'SEND_DATES_IN_DB_START',
  SEND_DATES_IN_DB_SUCCESS: 'SEND_DATES_IN_DB_SUCCESS',
  SEND_DATES_IN_DB_ERROR: 'SEND_DATES_IN_DB_ERROR',
};

export default actionTypesBookingForm;
