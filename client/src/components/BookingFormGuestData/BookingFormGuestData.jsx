import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import { AiFillCalendar } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';

import Navigation from '../Navigation/Navigation.jsx';
import bookingFormAction from '../../redux/actionCreators/bookingFormAC';
import actionTypesBookingForm from '../../redux/actionTypes/bookingFormAT';

import styles from './BookingFormGuestData.module.css';
// функция для приведения даты в стейте в более читаемый вид формата '20 Ноября' вместо 2021-11-20
import dateToTextFormat from '../data/functions/dateToTextFormat';
import totalSumForBooking from '../data/functions/totalSumForBooking';
import useLocalStorage from '../data/helpData/useLocalStorage';
import actionTypesRooms from '../../redux/actionTypes/roomsAT';

export default function BookingFormGuestData() {
  const dispatch = useDispatch();
  const history = useHistory();
  // получаем уже имеющиеся данные о бронировании из стейта
  const dataAboutBooking = useSelector((state) => state.bookingForm.list);
  const successBooking = useSelector((state) => state.bookingForm.success);
  // local Storage
  const [surname, setSurname] = useLocalStorage('surname', '');
  const [name, setName] = useLocalStorage('name', '');
  const [patronymic, setPatronymic] = useLocalStorage('thirdName', '');
  const [email, setEmail] = useLocalStorage('mail', '');
  const [phone, setPhone] = useLocalStorage('phone', '');
  const [guestComment, setGuestComment] = useLocalStorage('guestComment', '');

  // отправляем данные из формы в стейт
  const handleSubmit = (event) => {
    event.preventDefault();

    const searchData = {
      surname: event.target.surname.value,
      name: event.target.name.value,
      patronymic: event.target.patronymic.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      wantPhoneNotice: event.target.wantPhoneNotice.checked,
      wantGetAds: event.target.wantGetAds.checked,
      guestComment: event.target.guestComment.value,
    };

    dispatch(bookingFormAction.addDataFromPersonalInfForm(searchData));

    // отправляем данные о бронировании из стейта и формы в базу данных
    dispatch({
      type: actionTypesBookingForm.SEND_BOOKINFO_IN_DB_START,
      payload: { dataAboutBooking, searchData },
    });
    // отправляем данные о заполненности номера
    dispatch({
      type: actionTypesRooms.EDIT_ROOMS_FULLNESS_START,
      payload: {
        guestNumber: +dataAboutBooking.guestNumber,
        roomId: +dataAboutBooking.selectedRoom.id,
        fullness: +dataAboutBooking.selectedRoom.fullness,
      },
    });
  };

  return (
    <>
      <Navigation />
      {successBooking
        ? <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4.688rem',
        }}>
          <div className={styles.topStockBlock}></div>
          <div className={styles.stockBlock}>
            <p className={styles.title}>Бронирование прошло успешно!</p>
            <p className={styles.bodyText}>Ожидайте звонка менеджера для подтверждения.</p>
            <button className={styles.button} onClick={() => {
              localStorage.clear();
              history.push('/');
            }}>
              <p className={styles.buttonText}>На главную</p>
            </button>
          </div>
        </div>

        : <div className={styles.guestDataContainer}>
          <div className={styles.guestDataTitle}><h3>Информация о бронировании</h3></div>

          <div className={styles.bookingDataFromState}>
            <div className={styles.datesAndGuestsData}>
              <div>
                <AiFillCalendar className={styles.icon} />
                {dateToTextFormat(dataAboutBooking.arrivalDate)}
                &nbsp;&mdash;&nbsp;
                {dateToTextFormat(dataAboutBooking.departureDate)}
              </div>
              <div><BsFillPersonFill className={styles.icon} />
                Гостей: {dataAboutBooking.guestNumber} </div>
            </div>
            <div className={styles.totalPriceData}>
              Общая стоимость:&nbsp;&nbsp;
              {totalSumForBooking(
                dataAboutBooking.arrivalDate,
                dataAboutBooking.departureDate,
                dataAboutBooking.selectedRoom.price,
                dataAboutBooking.guestNumber,
              )}
              &nbsp;&#x20bd;
            </div>
          </div>

          <div className={styles.linedInfo}>Пожалуйста, заполните следующие данные</div>

          <div className={styles.formContainer}>
            <h5>Контактные данные</h5>

            <div className={styles.contactData}>
              <div className={styles.alertBooking}>
                На электронную почту вам придёт подтверждение бронирования.
                При необходимости мы свяжемся с вами по телефону, чтобы уточнить детали.
              </div>

              {/* данные, которые пойдут в стейт и в базу */}
              <form onSubmit={handleSubmit}>
                <div className={styles.guestDataForm}>
                  <div>
                    <input name="surname" type="text" placeholder="Фамилия" value={surname} onChange={(e) => setSurname(e.target.value)} autoFocus={true} required />
                    <input name="name" type="text" placeholder="Имя" required value={name} onChange={(e) => setName(e.target.value)} />
                    <input name="patronymic" type="text" placeholder="Отчество" value={patronymic} onChange={(e) => setPatronymic(e.target.value)} />
                  </div>
                  <div>
                    {/* тут сторонняя библиотека для подставления номера в нужном формате  */}
                    <input name="email" type="email" placeholder="Электронная почта (email)" inputMode="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <NumberFormat name="phone" format="+7 (###) ###-####" mask="_" type="tel" placeholder='+ 7 (___) ___-____' value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                </div>

                <div className={styles.checkboxes}>
                  <div className={styles.checkboxInfo}>
                    <input name="wantPhoneNotice" type="checkbox" id="bookingOnPhone" />
                    <span>Я хочу дополнительно получить подтверждение бронирования на телефон</span>
                  </div>
                  <div className={styles.checkboxInfo}>
                    <input name="wantGetAds" type="checkbox" id="wantAdMessage" />
                    <span>Я хочу узнавать о специальных предложениях и новостях по email или SMS
                    </span>
                  </div>
                </div>

                <div className={styles.linedInfo}>Информация о заселении</div>

                <div className={styles.addInfoFromGuest}>
                  <h5>Время заезда и выезда</h5>
                  <p>Стандартное время заезда — <b>14:00</b>, выезда — <b>12:00</b>.</p>
                </div>

                <div className={styles.addInfoFromGuest}>
                  <h5>Дополнительные комментарии</h5>
                  <textarea
                    name="guestComment" rows="1"
                    placeholder="Если у вас есть дополнительные пожелания, пожалуйста, дайте нам знать.
        Мы постараемся учесть ваши пожелания при наличии такой возможности."
                    value={guestComment} onChange={(e) => setGuestComment(e.target.value)}
                  >
                  </textarea>
                </div>

                <div className={styles.btnContainer}>
                  <button type="submit" className={styles.bookingBtn}>Забронировать</button>
                </div>

              </form>
            </div>
          </div>
        </div >}
    </>
  );
}
