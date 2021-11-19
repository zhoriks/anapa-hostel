import { takeEvery, call, put } from 'redux-saga/effects';
import actionTypesBookings from '../actionTypes/bookingsAT';
import actionTypesLogin from '../actionTypes/loginAT';
import actionTypesLogout from '../actionTypes/logoutAT';

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
    yield put({ type: actionTypesBookings.INIT_BOOKINGS_SUCCESS, payload: bookings });
  } catch (error) {
    yield put({ type: actionTypesBookings.INIT_BOOKINGS_ERROR, payload: error });
  }
}

function* fetchLogin(action) {
  try {
    const { isAdmin, session } = yield call(fetchData, {
      url: 'http://localhost:5001/admin',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: action.payload.login,
        password: action.payload.password,
      }),
    });
    yield put({ type: actionTypesLogin.LOGIN_SUCCESS, payload: { isAdmin, session } });
  } catch (error) {
    yield put({ type: actionTypesLogin.LOGIN_ERROR, payload: error });
  }
}
function* fetchLogout() {
  try {
    const { isAdmin } = yield call(fetchData, {
      url: 'http://localhost:5001/admin/logout',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    yield put({ type: actionTypesLogout.LOGOUT_SUCCESS, payload: isAdmin });
  } catch (error) {
    yield put({ type: actionTypesLogout.LOGOUT_ERROR, payload: error });
  }
}

function* watchActions() {
  yield takeEvery(actionTypesBookings.INIT_BOOKINGS_START, fetchBookings);
  yield takeEvery(actionTypesLogin.LOGIN_START, fetchLogin);
  yield takeEvery(actionTypesLogout.LOGOUT_START, fetchLogout);
}

export default watchActions;
