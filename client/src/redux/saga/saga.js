import { takeEvery, call, put } from 'redux-saga/effects';
import actionTypesBookings from '../actionTypes/bookingsAT';

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

async function* fetchBookings() {
  try {
    const bookings = yield call(fetchData, {
      url: '',
    });
    yield put({ type: actionTypesBookings.INIT_BOOKINGS, payload: bookings });
  } catch (error) {
    console.log(error);
  }
}

function* watchActions() {
  yield takeEvery(actionTypesBookings.INIT_BOOKINGS, fetchBookings);
}

export default watchActions;
