import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import bookingFormAction from '../../redux/actionCreators/bookingFormAC';
import lastochkaSliderImages from '../data/helpData/lastochkaSlider';
import morskoyBrizSliderImages from '../data/helpData/morskoyBrizSlider';
import roomSliderSettings from '../data/helpData/roomSliderSettings';
import PhotoSlider from '../PhotoSlider/PhotoSlider.jsx';
import styles from './SelectedRoom.module.css';

const SelectedRoom = ({ selectedItem }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const [roomImgByName, setRoomImgByName] = useState(lastochkaSliderImages);

  const selectThisRoom = (room) => {
    const selectedRoom = room;
    dispatch(bookingFormAction.addSelectedRoomFromForm(selectedRoom));
    history.push('/final-booking');
  };

  let a = {};
  switch (selectedItem.name) {
    case 'Lastochka':
      a = lastochkaSliderImages;
      break;
    case 'Morshoy briz':
      a = morskoyBrizSliderImages;
      break;
    default:
      a = lastochkaSliderImages;
  }
  // console.log(lastochkaSliderImages);

  return (
    <div className={styles.card}>
      {/* <img src="./room.jpeg" alt="" className={styles.img} /> */}
      <div className={styles.img}>
        <PhotoSlider images={a} settings={roomSliderSettings} />
      </div>
      <div className={styles.text}>
        <div className={styles.topText}> <span>Номер "{selectedItem.type}"&nbsp;</span>&mdash;
          <span className={styles.roomName}>&nbsp;{selectedItem.name}</span>
        </div>
        <div>
          <span>{selectedItem.price / 75} кв.м.</span>
          <span>до {selectedItem.numberOfBeds} мест</span>
        </div>
        <div className={styles.bottomText}>
          <div className={styles.priceContainer} >
            <span className={styles.price}>{selectedItem.price}&nbsp;&#x20bd;</span>
            <span className={styles.priceInfo}>1 ночь / 1гость</span>
          </div>
          <button
            className={styles.buttonChoose}
            onClick={() => selectThisRoom(selectedItem)}>
            Выбрать
          </button>
        </div>
      </div>
    </div >
  );
};

export default SelectedRoom;
