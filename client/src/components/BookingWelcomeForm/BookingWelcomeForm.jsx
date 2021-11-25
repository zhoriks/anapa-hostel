import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import bookingFormAction from '../../redux/actionCreators/bookingFormAC';
import actionTypesBookingForm from '../../redux/actionTypes/bookingFormAT';

// подключение модульного CSS
import styles from './BookingWelcomeForm.module.css';

export default function BookingWelcomeForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  // добавляю useState для контролируемого инпута, чтобы всегда учитывать,
  // что гость вводит в arrivalDate и устанавливать минимальную departureDate хотя бы на день позже
  const [nextDay, setNextDay] = useState(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate() + 1}`);

  // отпраляем данные в стейт
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchData = {
      arrivalDate: event.target.arrivalDate.value,
      departureDate: event.target.departureDate.value,
      guestNumber: event.target.guestNumber.value,
    };

    dispatch(bookingFormAction.includeDataFromStartForm(searchData));
    dispatch({ type: actionTypesBookingForm.SEND_DATES_IN_DB_START, payload: searchData });
    history.push('/select-room');
  };

  return (
    <div className={styles.helperForPosition}>
      <div className={styles.bookingWelcomeContainer}>

        {/* svg-картинка с нетипичной формой нужна для фона формы  */}
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.bookingWelcomeSvg} viewBox="0 0 871 237">
          <path d="M820.786 236.5H50C22.3858 236.5 0 214.114 0 186.5V86.5C0 58.8858 22.3858 36.5 50 36.5H203.5H305.25H339.014C350.042 36.5 360.692 32.4809 368.97 25.1951L386.253 9.98425C412.317 -12.9538 452.782 9.33517 447.325 43.6231C443.743 66.1266 461.13 86.5 483.917 86.5H801.619C822.328 86.5 840.894 99.2663 848.306 118.603L867.473 168.603C880.024 201.345 855.851 236.5 820.786 236.5Z" fill="white" />
        </svg>

        <div className={styles.flexContainer}>
          <div className={styles.bookingLabel}>
            <div className={styles.bookingLabelTitle}>Онлайн-бронирование номеров</div>
            <div className={styles.bookingLabelSubTitle}>гарантированное заселение</div>
          </div>

          <form onSubmit={handleSubmit} className={styles.bookingWelcomeForm}>

            <div className={styles.bookingWelcomeFormElement}>
              {/* default value для даты заезда и выезда - неоптимальное решение,
          ** не сработает при переходе c 30/31 дня на 1 день месяца и с декабря на январь */}
              <label htmlFor="arrivalDate">Дата заезда:</label>
              <input name="arrivalDate" type="date"
                defaultValue={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`}
                // min - раньше этой даты нельзя выбрать дату в календаре
                // для arrivalDate min это текущее число
                min={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`}
                className={styles.bookingWelcomeFormInput}
                // контролируемый инпут, чтобы от него отталкиваться при определении
                // min для departureDate
                onChange={(event) => setNextDay(event.target.value)} />
            </div>

            <div className={styles.bookingWelcomeFormElement}>
              <label htmlFor="departureDate">Дата выезда:</label>
              <input name="departureDate" type="date"
                // дефолтная дата - завтрашний день
                defaultValue={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate() + 1}`}
                // min дата - следующий день после выбранного гостем arrivalDate
                // те сейчас нельзя выбрать дату заселения в декабре, а выселения - в ноябре
                min={`${new Date(nextDay).getFullYear()}-${new Date(nextDay).getMonth() + 1}-${new Date(nextDay).getDate() + 1}`}
                className={styles.bookingWelcomeFormInput} />
            </div>

            {/* пока стоят минимально возможное число гостей - 1 и максимально возможное - 8 */}
            <div className={styles.bookingWelcomeFormElement}>
              <label htmlFor="guestNumber" className={styles.icon}>Гости:</label>
              <input name="guestNumber" type="number"
                max="8" min="1" defaultValue="2"
                className={styles.bookingWelcomeFormInput} />
            </div>

            <div className={styles.bookingWelcomeFormElement}>
              <label htmlFor="bookingWelcomeFormButton" className={styles.hidden}>This is a button</label>
              <button type="submit" className={styles.bookingWelcomeFormButton}>
                Найти номер
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
