import React, { useState } from 'react';
// import { BsFillPersonFill } from 'react-icons/bs';
// import { AiFillCalendar } from 'react-icons/ai';
import { useSelector } from 'react-redux';

import styles from './SelectRoom.module.css';
// import dateToTextFormat from '../data/functions/dateToTextFormat';

import Navigation from '../Navigation/Navigation.jsx';
import SelectedRoom from '../SelectedRoom/SelectedRoom.jsx';
import BookingWelcomeForm from '../BookingWelcomeForm/BookingWelcomeForm.jsx';

const SelectRoom = () => {
  // тут мы заносим в стейт да/нет - будет ли отрисовываться форма с выбором других дат,
  // если все текущие даты заняты
  const [showForm, setShowForm] = useState(false);
  // const [wantOtherDates, setWantOtherDates] = useState(false);
  // тут изменение select - катерогии номеров
  const [typeRoom, setTypeRoom] = useState('All');
  // const [hasVacantRooms, setHasVacantRooms] = useState(true);
  // const date = useSelector((state) => state.bookingForm.list);
  const vacantRooms = useSelector((state) => state.bookingForm.list.vacantRooms);
  const roomsByType = vacantRooms.filter((room) => room.type === typeRoom);

  return (
    <>
      <Navigation />
      <div className={styles.pageWrapper}>
        <header className={styles.header}>
          <div className={styles.title}><h2>Бронирование</h2></div>
          <div className={styles.inlineDiv}>
          <form onSubmit={() => {}} className={styles.bookingWelcomeForm}>
            <div className={styles.bookingWelcomeFormElement}>
              {/* default value для даты заезда и выезда - неоптимальное решение,
          ** не сработает при переходе c 30/31 дня на 1 день месяца и с декабря на январь */}
              <label htmlFor="arrivalDate">Дата заезда:</label>
              <input name="arrivalDate" type="date"
                defaultValue={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`}
                min={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`}
                className={styles.bookingWelcomeFormInput} />
            </div>
            <div className={styles.bookingWelcomeFormElement}>
              <label htmlFor="departureDate">Дата выезда:</label>
              <input name="departureDate" type="date"
                defaultValue={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate() + 1}`}
                min={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate() + 1}`}
                className={styles.bookingWelcomeFormInput} />
            </div>
            {/* пока стоят минимально возможное число гостей - 1 и максимально возможное - 15 */}
            <div className={styles.bookingWelcomeFormElement}>
              <label htmlFor="guestNumber" className={styles.icon} style={{ marginLeft: '7px' }}>Гости:</label>
              <input name="guestNumber" type="number"
                max="15" min="1" defaultValue="2"
                className={styles.bookingWelcomeFormInputPerson} />
            </div>
            <div className={styles.bookingWelcomeFormElement}>
              <label htmlFor="bookingWelcomeFormButton" className={styles.hidden}>This is a button</label>
              <button type="submit" className={styles.bookingWelcomeFormButton}>
                Изменить данные
              </button>
            </div>
          </form>
          <div className={styles.chooseRoom}>
            <span>Выберите категорию номера:</span>
            <select className={styles.chooseRoomSelector}
              onChange={(event) => setTypeRoom(event.target.value)}>
              <option value="All">Все</option>
              <option value="Эконом">Эконом</option>
              <option value="Комфорт">Комфорт</option>
              <option value="Люкс">Люкс</option>
            </select>
          </div>
          </div>
          <hr />
        </header>

        <div className={styles.roomContainer}>
          {
            !vacantRooms.length
              ? <div className={styles.noVacantRoomsBackground}>
                <div className={styles.noVacantRoomsContainer}>
                  <div className={styles.noVacantRoomsText}>
                    К сожалению, нет свободных номеров на выбранные вами даты
                  </div>
                  <div className={styles.noVacantRoomsLink} onClick={() => setShowForm(true)}>
                    Выбрать другие даты
                  </div>
                  {showForm
                    ? <div className={styles.noVacantRoomsForm}>
                      <BookingWelcomeForm />
                    </div>
                    : <></>}
                </div>
              </div>
              : (
                <>
                  {typeRoom === 'All'
                    ? <>{vacantRooms.map((room) => <SelectedRoom
                      key={room.id}
                      selectedItem={room}
                    />)} </>
                    : <>
                      {typeRoom !== 'All'
                        ? <>
                          {roomsByType.length
                            ? <>{
                              roomsByType.map((room) => <SelectedRoom
                                key={room.id}
                                selectedItem={room}
                              />)
                            }</>
                            : <>
                              <div>
                                <div>К сожалению, номеров категории {typeRoom} не осталось</div>
                                <div>Выберите, пожалуйста, другую категорию
                                  или даты бронирования</div>
                              </div>
                            </>
                          }
                        </>
                        : <></>
                      }
                    </>
                  }
                </>
              )
          }
        </div>
      </div>
    </>
  );
};

export default SelectRoom;

/* <span className={styles.dateText}>
  <AiFillCalendar className={styles.icon} />
  {dateToTextFormat(date.arrivalDate)}
  &nbsp;&mdash;&nbsp;
  {dateToTextFormat(date.departureDate)}
</span> */

/* <div className={styles.dateContainer}>
  <div className={styles.date}>
    <span className={styles.dateText}>
      <AiFillCalendar className={styles.icon} />
      {dateToTextFormat(date.arrivalDate)}
      &nbsp;&mdash;&nbsp;
      {dateToTextFormat(date.departureDate)}
    </span>
    <span className={styles.dateText}>
      <BsFillPersonFill className={styles.icon} />Гостей:&nbsp;{date.guestNumber}
    </span>
  </div>
  <button className={styles.changeDatesBtn}>Изменить даты
  </button>
</div> */
