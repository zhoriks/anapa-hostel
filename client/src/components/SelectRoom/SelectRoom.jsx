import React, { useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillCalendar } from 'react-icons/ai';
import { useSelector } from 'react-redux';

import styles from './SelectRoom.module.css';
import dateToTextFormat from '../data/functions/dateToTextFormat';

import Navigation from '../Navigation/Navigation.jsx';
import SelectedRoom from '../SelectedRoom/SelectedRoom.jsx';
import BookingWelcomeForm from '../BookingWelcomeForm/BookingWelcomeForm.jsx';

const SelectRoom = () => {
  // тут мы заносим в стейт да/нет - будет ли отрисовываться форма с выбором других дат,
  // если все текущие даты заняты
  const [showForm, setShowForm] = useState(false);
  // const [wantOtherDates, setWantOtherDates] = useState(false);
  // тут изменение select - катерогии номеров
  const [typeRoom, setTypeRoom] = useState('Все');
  // const [hasVacantRooms, setHasVacantRooms] = useState(true);
  const date = useSelector((state) => state.bookingForm.list);
  const vacantRooms = useSelector((state) => state.bookingForm.list.vacantRooms);
  const roomsByType = vacantRooms.filter((room) => room.type === typeRoom);

  return (
    <>
      <Navigation />
      <div className={styles.pageWrapper}>
        <header className={styles.header}>
          <div className={styles.title}><h2>Бронирование</h2></div>
          <div className={styles.dateContainer}>
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
            {/* нужно модальное окно для изменения дат? */}
          </div>
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
                      {!roomsByType.length
                        ? <div>
                          <div>К сожалению, номеров категории {typeRoom} не осталось</div>
                          <div>Выберите, пожалуйста, другую категорию или даты бронирования</div>
                        </div>
                        : <>
                          {
                            roomsByType.map((room) => <SelectedRoom
                              key={room.id}
                              selectedItem={room}
                            />)
                          }
                        </>
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
