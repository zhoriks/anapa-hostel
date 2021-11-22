const actionTypesBookingForm = {
  // собираем данные из форм в стейт
  INCLUDE_DATA_FROM_START_FORM: 'INCLUDE_DATA_FROM_START_FORM',
  ADD_DATA_FROM_PERSONAL_INF_FORM: 'ADD_DATA_FROM_PERSONAL_INF_FORM',
  // отправляем на бэк через сагу даты, выбранные в форме клиентом
  SEND_DATES_IN_DB_START: 'SEND_DATES_IN_DB_START',
  SEND_DATES_IN_DB_SUCCESS: 'SEND_DATES_IN_DB_SUCCESS',
  SEND_DATES_IN_DB_ERROR: 'SEND_DATES_IN_DB_ERROR',
  // SEARCH_VACANT_PLACES: 'SEARCH_VACANT_PLACES',
};

export default actionTypesBookingForm;
