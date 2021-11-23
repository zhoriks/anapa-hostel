import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import bookingFormAction from '../../redux/actionCreators/bookingFormAC';
import styles from './SelectedRoom.module.css';

const SelectedRoom = ({ selectedItem }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const selectThisRoom = (room) => {
    const selectedRoom = room;
    dispatch(bookingFormAction.addSelectedRoomFromForm(selectedRoom));
    history.push('/final-booking');
  };

  return (
    <div className={styles.card}>
      <img src="./room.jpeg" alt="" className={styles.img} />
      <div className={styles.text}>
        <span className={styles.roomName}>{selectedItem.name}</span>
        <div className={styles.middleText}>
          <span>{selectedItem.type}</span>
          <span>до {selectedItem.numberOfBeds} мест</span>
        </div>
        <div className={styles.bottomText}>
          <span>{selectedItem.price}</span>
          <button
            className={styles.buttonChoose}
            onClick={() => selectThisRoom(selectedItem)}>
            Выбрать
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedRoom;
