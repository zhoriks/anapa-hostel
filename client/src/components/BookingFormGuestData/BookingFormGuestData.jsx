import React from 'react';
import { useSelector } from 'react-redux';

import styles from './BookingFormGuestData.module.css';

export default function BookingFormGuestData() {
  // const dispatch = useDispatch();
  const dataAboutBooking = useSelector((state) => state.bookingForm.list);

  return (
    <div className={styles.guestDataContainer}>
      <h3>Введите данные гостей</h3>

      <div className={styles.bookingDataFromState}>
        <div className={styles.datesAndGuestsData}>
          <div>{dataAboutBooking.arrivalDate} -
            {dataAboutBooking.departureDate}</div>
          <div>Гостей: {dataAboutBooking.guestNumber} </div>
        </div>
        <div className={styles.totalPriceData}>Общая стоимость:</div>
      </div>

      <div className={styles.linedInfo}>Пожалуйста, заполните следующие данные</div>

      <div>
        <h5>Контантные данные</h5>
        <div className={styles.contactData}>
          <div className={styles.alertBooking}>
            На электронную почту вам придёт подтверждение бронирования.
            При необходимости мы свяжемся с вами по телефону, чтобы уточнить детали.
          </div>
          <form className={styles.guestDataForm}>
            <div>
              <input type="text" placeholder="Фамилия" required />
              <input type="text" placeholder="Имя" required />
              <input type="text" placeholder="Отчество" />
            </div>
            <div>
              <input type="email" placeholder="Электронная почта (email)" inputmode="email" required />
              <input type="tel" placeholder="+_(___)___-____" inputmode="tel" required />
            </div>
          </form>
          <div className={styles.checkboxes}>
            <div className={styles.checkboxInfo}>
              <input type="checkbox" name="" id="bookingOnPhone" />
              <span>Я хочу дополнительно получить подтверждение бронирования на телефон</span>
            </div>

            <div className={styles.checkboxInfo}>
              <input type="checkbox" name="" id="wandAdMessage" />
              <span>Я хочу узнавать о специальных предложениях и новостях по email или SMS
              </span>
            </div>
          </div>
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
          name="" id="" rows="1"
          placeholder="Если у вас есть дополнительные пожелания, пожалуйста, дайте нам знать.
        Мы постараемся учесть ваши пожелания при наличии такой возможности.">
        </textarea>
      </div>

      <button type="submit" className={styles.bookingBtn}>Забронировать</button>
    </div>
  );
}
