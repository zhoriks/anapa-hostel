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
  // const [hasVacantRooms, setHasVacantRooms] = useState(true);
  const date = useSelector((state) => state.bookingForm.list);
  const vacantRooms = useSelector((state) => state.bookingForm.list.vacantRooms);

  // клиент меняет даты по желанию
  // const changeDatesByWish = () => {
  //   setShowForm(true);
  // };

  // клиент меняет даты из-за отсутствия мест
  // const changeDatesByNeed = () => {
  //   setShowForm(true);
  //   setHasVacantRooms(false);
  // };

  // const rooms = [
  //   {
  //     id: 1,
  //     type: 'Эконом',
  //     name: 'Lastochka',
  //     numberOfBeds: '8',
  //     price: '1500',
  //   },
  //   {
  //     id: 2,
  //     type: 'Эконом',
  //     name: 'Morshoy briz',
  //     numberOfBeds: '8',
  //     price: '1500',
  //   },
  //   {
  //     id: 3,
  //     type: 'Комфорт',
  //     name: 'Voshod',
  //     numberOfBeds: '4',
  //     price: '3000',
  //   },
  // ];
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
                Гостей:&nbsp;<BsFillPersonFill className={styles.icon} />{date.guestNumber}
              </span>
            </div>
            <button className={styles.changeDatesBtn}
              onClick={() => setShowForm(true)}>Изменить даты
            </button>
            {/* нужно модальное окно для изменения дат! */}
          </div>
          <span className={styles.chooseRoom}>Выберите номер:</span>
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
                    ? <div className={styles.noVacantRoomsForm}><BookingWelcomeForm /></div>
                    : <></>}
                </div>
              </div>
              : (
                <>
                  {
                    vacantRooms.map((room) => <SelectedRoom
                      key={room.id}
                      type={room.type}
                      name={room.name}
                      numberOfBeds={room.numberOfBeds}
                      price={room.price}
                    />)
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
