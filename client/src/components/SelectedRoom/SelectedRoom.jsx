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

  // отправляем в стейт информацию о выбранном номере
  const selectThisRoom = (room) => {
    const selectedRoom = room;
    dispatch(bookingFormAction.addSelectedRoomFromForm(selectedRoom));
    history.push('/final-booking');
  };

  // подтягиваем разные картинки для слайдеров для разных комнат
  let sliderByName = {};
  switch (selectedItem.name) {
    case 'Lastochka':
      sliderByName = lastochkaSliderImages;
      break;
    case 'Morshoy briz':
      sliderByName = morskoyBrizSliderImages;
      break;
    case 'Voshod':
      sliderByName = voshodSliderImages;
      break;
    case 'Zakat':
      sliderByName = zakatSliderImages;
      break;
    case 'President lux':
      sliderByName = presidentLuxSliderImages;
      break;
    case 'Grand lux':
      sliderByName = grandLuxSliderImages;
      break;
    default:
      sliderByName = lastochkaSliderImages;
  }

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        {/* подтягиваем компонент слайдера и передаем ему пропсами картинки и настройки */}
        <PhotoSlider images={sliderByName} settings={roomSliderSettings} />
      </div>
      <div className={styles.text}>
        <div className={styles.topText}> <span>Номер "{selectedItem.type}"&nbsp;</span>&mdash;
          <span className={styles.roomName}>&nbsp;{selectedItem.name}</span>
        </div>
        <div>
          {/* временная заглушка для площади номеров */}
          <span>{selectedItem.price / 75} кв.м.</span>
          <span>до {selectedItem.numberOfBeds} мест</span>
        </div>
        <div className={styles.bottomText}>
          <div className={styles.priceContainer} >
            <span className={styles.price}>{selectedItem.price}&nbsp;&#x20bd;</span>
            <span className={styles.priceInfo}>1 ночь / 1гость</span>
          </div>
          {/* по клику выбирается номер и все данные о нем летят в стейт */}
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
