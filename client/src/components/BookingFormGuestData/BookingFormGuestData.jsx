import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import { AiFillCalendar } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';

import bookingFormAction from '../../redux/actionCreators/bookingFormAC';

import styles from './BookingFormGuestData.module.css';
// функция для приведения даты в стейте в более читаемый вид формата '20 Ноября' вместо 2021-11-20
import dateToTextFormat from '../data/functions/dateToTextFormat';

export default function BookingFormGuestData() {
  const dispatch = useDispatch();
  // получаем уже имеющиеся данные о бронировании из стейта
  const dataAboutBooking = useSelector((state) => state.bookingForm.list);

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
      wandGetAds: event.target.wandGetAds.checked,
      guestComment: event.target.guestComment.value,
    };

    dispatch(bookingFormAction.addDataFromPersonalInfForm(searchData));
  };

  return (
    <div className={styles.guestDataContainer}>
      <div className={styles.guestDataTitle}><h3>Введите данные гостей</h3></div>

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
        <div className={styles.totalPriceData}>Общая стоимость:</div>
      </div>

      <div className={styles.linedInfo}>Пожалуйста, заполните следующие данные</div>

      <div className={styles.formContainer}>
        <h5>Контантные данные</h5>

        <div className={styles.contactData}>
          <div className={styles.alertBooking}>
            На электронную почту вам придёт подтверждение бронирования.
            При необходимости мы свяжемся с вами по телефону, чтобы уточнить детали.
          </div>

          {/* данные, которые пойдут в стейт и в базу */}
          <form onSubmit={handleSubmit}>
            <div className={styles.guestDataForm}>
              <div>
                <input name="surname" type="text" placeholder="Фамилия" autoFocus={true} required />
                <input name="name" type="text" placeholder="Имя" required />
                <input name="patronymic" type="text" placeholder="Отчество" />
              </div>
              <div>
                {/* тут сторонняя библиотека для подставления номера в нужном формате  */}
                <input name="email" type="email" placeholder="Электронная почта (email)" inputMode="email" required />
                <NumberFormat name="phone" format="+7 (###) ###-####" mask="_" type="tel" placeholder='+ 7 (___) ___-____' />
              </div>
            </div>

            <div className={styles.checkboxes}>
              <div className={styles.checkboxInfo}>
                <input name="wantPhoneNotice" type="checkbox" id="bookingOnPhone" />
                <span>Я хочу дополнительно получить подтверждение бронирования на телефон</span>
              </div>
              <div className={styles.checkboxInfo}>
                <input name="wandGetAds" type="checkbox" id="wandAdMessage" />
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
        Мы постараемся учесть ваши пожелания при наличии такой возможности.">
              </textarea>
            </div>

            <div className={styles.btnContainer}>
              <button type="submit" className={styles.bookingBtn}>Забронировать</button>
            </div>

          </form>
        </div>
      </div>
    </div >
  );
}
