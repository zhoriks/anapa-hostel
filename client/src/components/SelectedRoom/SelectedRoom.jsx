import React from 'react';
import styles from './SelectedRoom.module.css';

const SelectedRoom = ({
  type, name, numberOfBeds, price,
}) => (
    <div className={styles.card}>
      <img src="./room.jpeg" alt="" className={styles.img} />
      <div className={styles.text}>
        <span className={styles.roomName}>{name}</span>
        <div className={styles.middleText}>
          <span>{type}</span>
          <span>до {numberOfBeds} мест</span>
        </div>
        <div className={styles.bottomText}>
          <span>{price}</span>
          <button className={styles.buttonChoose}>Выбрать</button>
        </div>
      </div>
    </div>
);

export default SelectedRoom;
