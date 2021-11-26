import { takeEvery, call, put } from 'redux-saga/effects';
import actionTypesBookingForm from '../actionTypes/bookingFormAT';
import actionTypesReviewsTicker from '../actionTypes/reviewsTickerAT';
import actionTypesReviewsForm from '../actionTypes/reviewsFormAT';

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
      url: '/admin/checkdate',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // эти данные полетят на бэк,
      // чтобы там в контроллере реализовался поиск свободных номеров на эти даты и кол-во человек
      body: JSON.stringify({
        checkInDate: action.payload.arrivalDate,
        checkOutDate: action.payload.departureDate,
        guestsNumber: action.payload.guestNumber,
      }),
    });
    // тут на бэке происходит магия и в checkdates.controller ищутся свободные номера
    // то, что получим в ответ на запрос
    yield put({ type: actionTypesBookingForm.SEND_DATES_IN_DB_SUCCESS, payload: vacantRooms });
  } catch (error) {
    yield put({ type: actionTypesBookingForm.SEND_DATES_IN_DB_ERROR, payload: error });
  }
}

function* fetchBookInDB(action) {
  try {
    yield call(fetchData, {
      url: '/post-new-booking',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // эти данные о новом бронировании, которые будут отправлены на сервер
      // поступают они с BookingFormGuestData, часть из стейта, часть с самой формы
      body: JSON.stringify({
        guestFirstName: action.payload.searchData.name,
        guestLastName: action.payload.searchData.surname,
        guestPatronymic: action.payload.searchData.patronymic,
        checkInDate: action.payload.dataAboutBooking.arrivalDate,
        checkOutDate: action.payload.dataAboutBooking.departureDate,
        categoryRoom: action.payload.dataAboutBooking.selectedRoom.type,
        guestsNumber: +action.payload.dataAboutBooking.guestNumber,
        email: action.payload.searchData.email,
        telephone: action.payload.searchData.phone,
        RoomId: action.payload.dataAboutBooking.selectedRoom.id,
        comment: action.payload.searchData.guestComment,
        wantPhoneNotice: action.payload.searchData.wantPhoneNotice,
      }),
    });
    // при успешном добавлении нового бронирования в bookingForm.controller получим это
    yield put({ type: actionTypesBookingForm.SEND_BOOKINFO_IN_DB_SUCCESS });
  } catch (error) {
    yield put({ type: actionTypesBookingForm.SEND_BOOKINFO_IN_DB_ERROR, payload: error });
  }
}

function* fetchReviews() {
  try {
    const reviews = yield call(fetchData, {
      url: '/reviews',
    });
    yield put({ type: actionTypesReviewsTicker.GET_REVIEWS_FROM_DB_SUCCESS, payload: reviews });
  } catch (error) {
    yield put({ type: actionTypesReviewsTicker.GET_REVIEWS_FROM_DB_ERROR, payload: error });
  }
}

function* newReviewAdd(action) {
  try {
    yield call(fetchData, {
      url: '/reviews',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        guestName: action.payload.guestName,
        guestTelephone: action.payload.guestTelephone,
        comment: action.payload.review,
      }),
    });
    yield put({ type: actionTypesReviewsForm.SEND_REVIEWS_IN_DB_SUCCESS });
  } catch (error) {
    yield put({ type: actionTypesReviewsForm.SEND_REVIEWS_IN_DB_ERROR, payload: error });
  }
}

function* watchActionsClient() {
  yield takeEvery(actionTypesBookingForm.SEND_DATES_IN_DB_START, fetchRooms);
  yield takeEvery(actionTypesBookingForm.SEND_BOOKINFO_IN_DB_START, fetchBookInDB);
  yield takeEvery(actionTypesReviewsTicker.GET_REVIEWS_FROM_DB_START, fetchReviews);
  yield takeEvery(actionTypesReviewsForm.SEND_REVIEWS_IN_DB_START, newReviewAdd);
}

export default watchActionsClient;
