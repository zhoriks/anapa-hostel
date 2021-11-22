import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillCalendar } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import styles from './SelectRoom.module.css';
import SelectedRoom from '../SelectedRoom/SelectedRoom.jsx';

const SelectRoom = () => {
  const date = useSelector((state) => state.bookingForm.list);
  const rooms = [
    {
      id: 1,
      type: 'Эконом',
      name: 'Lastochka',
      numberOfBeds: '8',
      price: '1500',
    },
    {
      id: 2,
      type: 'Эконом',
      name: 'Morshoy briz',
      numberOfBeds: '8',
      price: '1500',
    },
    {
      id: 3,
      type: 'Комфорт',
      name: 'Voshod',
      numberOfBeds: '4',
      price: '3000',
    },
  ];
  return (
    <>
      <header className={styles.header}>
        <div className={styles.dateContainer}>
          <div className={styles.date}>
            <span className={styles.dateText}>
              <AiFillCalendar className={styles.icon} />
              с {date.arrivalDate} по {date.departureDate}</span>
            <span className={styles.dateText}>
              <BsFillPersonFill className={styles.icon} /> {date.guestNumber} гостя</span>
          </div>
        </div>
        <span className={styles.chooseRoom}>Выберите номер</span>
        <hr />
      </header>
      <div className={styles.roomContainer}>
        {rooms.map((el) => <SelectedRoom key={el.id} type={el.type} name={el.name}
          numberOfBeds={el.numberOfBeds} price={el.price} />)}
      </div>
    </>
  );
};
export default SelectRoom;
