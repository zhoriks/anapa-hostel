import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillCalendar } from 'react-icons/ai';
import styles from './SelectRoom.module.css';

const SelectRoom = () => (
    <>
      <header className={styles.header}>
        <div className={styles.dateContainer}>
          <div className={styles.date}>
            <span className={styles.dateText}>
              <AiFillCalendar className={styles.icon} /> 20 ноября - 21 ноября</span>
            <span className={styles.dateText}>
              <BsFillPersonFill className={styles.icon} /> 2 гостя</span>
          </div>
        </div>
        <span className={styles.chooseRoom}>Выберите номер</span>
        <hr />
      </header>
    </>
);
export default SelectRoom;
