import { takeEvery, call, put } from 'redux-saga/effects';
import actionTypesAdminReviews from '../actionTypes/adminReviewsAT';
import actionTypesBookings from '../actionTypes/bookingsAT';
import actionTypesCleaning from '../actionTypes/cleaningAT';
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
      url: '/admin/booking',
    });
    yield put({ type: actionTypesBookings.INIT_BOOKINGS_SUCCESS, payload: bookings });
  } catch (error) {
    yield put({ type: actionTypesBookings.INIT_BOOKINGS_ERROR, payload: error });
  }
}

function* changeBookings(action) {
  try {
    const bookings = yield call(fetchData, {
      url: '/admin/booking/change',
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
      url: '/admin/booking',
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
      url: '/admin/rooms',
    });
    yield put({ type: actionTypesRooms.INIT_ROOMS_SUCCESS, payload: rooms });
  } catch (error) {
    yield put({ type: actionTypesRooms.INIT_ROOMS_ERROR, payload: error });
  }
}

function* editRoomsFullness(action) {
  try {
    const rooms = yield call(fetchData, {
      url: '/admin/rooms',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        guestNumber: action.payload.guestNumber,
        roomId: action.payload.roomId,
        fullness: action.payload.fullness,
      }),
    });
    yield put({ type: actionTypesRooms.EDIT_ROOMS_FULLNESS_SUCCESS, payload: rooms });
  } catch (error) {
    yield put({ type: actionTypesRooms.EDIT_ROOMS_FULLNESS_ERROR, payload: error });
  }
}

function* fetchCleanings() {
  try {
    const cleaning = yield call(fetchData, {
      url: '/admin/cleaning',
    });

    yield put({ type: actionTypesCleaning.INIT_CLEANING_SUCCESS, payload: cleaning });
  } catch (error) {
    yield put({ type: actionTypesCleaning.INIT_CLEANING_ERROR, payload: error });
  }
}

function* updateCleanings(action) {
  try {
    const cleanings = yield call(fetchData, {
      url: '/admin/cleaning/update',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        RoomId: action.payload.RoomId,
        date: action.payload.date,
      }),
    });
    yield put({ type: actionTypesCleaning.UPDATE_CLEANING_SUCCESS, payload: cleanings });
  } catch (error) {
    yield put({ type: actionTypesCleaning.UPDATE_CLEANING_ERROR, payload: error });
  }
}

function* fetchGuests() {
  try {
    const bookings = yield call(fetchData, {
      url: '/admin/booking/now',
    });
    yield put({ type: actionTypesGuest.INIT_GUESTS_SUCCESS, payload: bookings });
  } catch (error) {
    yield put({ type: actionTypesGuest.INIT_GUESTS_ERROR, payload: error });
  }
}
function* fetchReviews() {
  try {
    const reviews = yield call(fetchData, {
      url: '/admin/review',
    });
    yield put({ type: actionTypesAdminReviews.INIT_REVIEWS_SUCCESS, payload: reviews });
  } catch (error) {
    yield put({ type: actionTypesGuest.INIT_GUESTS_ERROR, payload: error });
  }
}

function* editReviews(action) {
  try {
    const reviews = yield call(fetchData, {
      url: '/admin/review',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idReview: action.payload.id,
        status: action.payload.moderate,
      }),
    });
    yield put({ type: actionTypesAdminReviews.EDIT_REVIEWS_SUCCESS, payload: reviews });
  } catch (error) {
    yield put({ type: actionTypesAdminReviews.EDIT_REVIEWS_ERROR, payload: error });
  }
}

function* fetchLogin(action) {
  try {
    const { isAdmin, session } = yield call(fetchData, {
      url: '/admin',
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
      url: '/admin/logout',
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
      url: '/session',
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
  yield takeEvery(actionTypesAdminReviews.INIT_REVIEWS_START, fetchReviews);
  yield takeEvery(actionTypesAdminReviews.EDIT_REVIEWS_START, editReviews);
  yield takeEvery(actionTypesCleaning.INIT_CLEANING_START, fetchCleanings);
  yield takeEvery(actionTypesCleaning.UPDATE_CLEANING_START, updateCleanings);
  yield takeEvery(actionTypesRooms.EDIT_ROOMS_FULLNESS_START, editRoomsFullness);
}

export default watchActions;
