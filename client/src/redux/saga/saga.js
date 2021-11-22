import { takeEvery, call, put } from 'redux-saga/effects';
import actionTypesBookings from '../actionTypes/bookingsAT';
import actionTypesGuest from '../actionTypes/guestAT';
import actionTypesLogin from '../actionTypes/loginAT';
import actionTypesLogout from '../actionTypes/logoutAT';
import actionTypesRooms from '../actionTypes/roomsAT';
import actionTypesSession from '../actionTypes/sessionAT';

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

function* fetchBookings() {
  try {
    const bookings = yield call(fetchData, {
      url: 'http://localhost:5001/admin/booking',
    });
    yield put({ type: actionTypesBookings.INIT_BOOKINGS_SUCCESS, payload: bookings });
  } catch (error) {
    yield put({ type: actionTypesBookings.INIT_BOOKINGS_ERROR, payload: error });
  }
}

function* changeBookings(action) {
  try {
    const bookings = yield call(fetchData, {
      url: 'http://localhost:5001/admin/booking/change',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: action.payload.id,
        comment: action.payload.comment,
        status: action.payload.status,
      }),
    });
    yield put({ type: actionTypesBookings.EDIT_FORM_SUBMIT_SUCCESS, payload: bookings });
  } catch (error) {
    yield put({ type: actionTypesBookings.EDIT_FORM_SUBMIT_ERROR, payload: error });
  }
}
function* createBooking(action) {
  try {
    const bookings = yield call(fetchData, {
      url: 'http://localhost:5001/admin/booking',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        guestFirstName: action.payload.guestFirstName,
        guestLastName: action.payload.guestLastName,
        guestPatronymic: action.payload.guestPatronymic,
        checkInDate: action.payload.checkInDate,
        checkOutDate: action.payload.checkOutDate,
        categoryRoom: action.payload.categoryRoom,
        guestsNumber: action.payload.guestsNumber,
        email: action.payload.email,
        telephone: action.payload.telephone,
        status: action.payload.status,
        RoomId: action.payload.RoomId,
        comment: action.payload.comment,
      }),
    });
    yield put({ type: actionTypesBookings.CREATE_BOOKING_SUCCESS, payload: bookings });
  } catch (error) {
    yield put({ type: actionTypesBookings.CREATE_BOOKING_ERROR, payload: error });
  }
}

function* fetchRooms() {
  try {
    const rooms = yield call(fetchData, {
      url: 'http://localhost:5001/admin/rooms',
    });
    yield put({ type: actionTypesRooms.INIT_ROOMS_SUCCESS, payload: rooms });
  } catch (error) {
    yield put({ type: actionTypesRooms.INIT_ROOMS_ERROR, payload: error });
  }
}

function* fetchGuests() {
  try {
    const bookings = yield call(fetchData, {
      url: 'http://localhost:5001/admin/booking/now',
    });
    yield put({ type: actionTypesGuest.INIT_GUESTS_SUCCESS, payload: bookings });
  } catch (error) {
    yield put({ type: actionTypesGuest.INIT_GUESTS_ERROR, payload: error });
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

function* checkSession() {
  try {
    const { isAdmin, session } = yield call(fetchData, {
      url: 'http://localhost:5001/session',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    yield put({ type: actionTypesSession.CHECK_SESSION_SUCCESS, payload: { isAdmin, session } });
  } catch (error) {
    yield put({ type: actionTypesSession.CHECK_SESSION_ERROR, payload: error });
  }
}

function* watchActions() {
  yield takeEvery(actionTypesBookings.INIT_BOOKINGS_START, fetchBookings);
  yield takeEvery(actionTypesLogin.LOGIN_START, fetchLogin);
  yield takeEvery(actionTypesLogout.LOGOUT_START, fetchLogout);
  yield takeEvery(actionTypesSession.CHECK_SESSION_START, checkSession);
  yield takeEvery(actionTypesRooms.INIT_ROOMS_START, fetchRooms);
  yield takeEvery(actionTypesBookings.EDIT_FORM_SUBMIT_STOP, changeBookings);
  yield takeEvery(actionTypesGuest.INIT_GUESTS_START, fetchGuests);
  yield takeEvery(actionTypesBookings.CREATE_BOOKING_START, createBooking);
}

export default watchActions;
