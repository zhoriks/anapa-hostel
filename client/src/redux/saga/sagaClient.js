import { takeEvery, call, put } from 'redux-saga/effects';
import actionTypesBookingForm from '../actionTypes/bookingFormAT';

async function fetchData({
  url, method, headers, body,
}) {
  const response = await fetch(url, {
    method,
    headers,
    body,
    credentials: 'include',
  });
  const data = await response.json();
  return data;
}

function* fetchRooms(action) {
  try {
    const vacantRooms = yield call(fetchData, {
      url: 'http://localhost:5001/admin/booking',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // эти данные полетят на бэк,
      // чтобы там в контроллере реализовался поиск свободных номеров на эти даты и кол-во человек
      body: JSON.stringify({
        arrivalDate: action.payload.arrivalDate,
        departureDate: action.payload.departureDate,
        guestNumber: action.payload.guestNumber,
      }),
    });
    // тут на бэке происходит магия и в checkdates.controller ищутся свободные номера
    // то, что получим в ответ на запрос
    yield put({ type: actionTypesBookingForm.SEND_DATES_IN_DB_SUCCESS, payload: vacantRooms });
  } catch (error) {
    yield put({ type: actionTypesBookingForm.SEND_DATES_IN_DB_ERROR, payload: error });
  }
}

function* watchActionsClient() {
  yield takeEvery(actionTypesBookingForm.SEND_DATES_IN_DB_START, fetchRooms);
}

export default watchActionsClient;