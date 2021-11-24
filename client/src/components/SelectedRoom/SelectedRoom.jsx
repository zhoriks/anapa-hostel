import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import bookingFormAction from '../../redux/actionCreators/bookingFormAC';
// настройки для слайдеров:
import roomSliderSettings from '../data/helpData/roomSliderSettings';
// фотографии для слайдеров
import lastochkaSliderImages from '../data/helpData/lastochkaSlider';
import morskoyBrizSliderImages from '../data/helpData/morskoyBrizSlider';
import voshodSliderImages from '../data/helpData/voshodSlider';
import zakatSliderImages from '../data/helpData/zakatSlider';
import presidentLuxSliderImages from '../data/helpData/presidentLuxSlider';
import grandLuxSliderImages from '../data/helpData/grandLuxSlider';
// компонент стайдера
import PhotoSlider from '../PhotoSlider/PhotoSlider.jsx';
import styles from './SelectedRoom.module.css';
// стили для стрелок на слайдере
import './CustomSliderStyle.css';

const SelectedRoom = ({ selectedItem }) => {
  const dispatch = useDispatch();
  const history = useHistory();

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
    case 'Voshod':
      a = voshodSliderImages;
      break;
    case 'Zakat':
      a = zakatSliderImages;
      break;
    case 'President lux':
      a = presidentLuxSliderImages;
      break;
    case 'Grand lux':
      a = grandLuxSliderImages;
      break;
    default:
      a = lastochkaSliderImages;
  }

  return (
    <div className={styles.card}>
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
