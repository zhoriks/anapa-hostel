import React from 'react';
import HostelRoom from '../HostelRoom/HostelRoom.jsx';
import styles from './HostelRooms.module.css';

import economyImg from './img/economyRoom.jpeg';
import economyImg1 from './img/economyRoom1.jpeg';
import economyImg2 from './img/economyRoom2.jpeg';

import comfortImg from './img/comfortRoom.jpeg';
import comfortImg1 from './img/comfortRoom1.jpeg';
import comfortImg2 from './img/comfortRoom2.jpeg';
import comfortImg3 from './img/comfortRoom3.jpeg';
import comfortImg4 from './img/comfortRoom4.jpeg';

import businessImg from './img/deluxeRoom.jpeg';
import businessImg1 from './img/deluxeRoom1.jpeg';
import businessImg2 from './img/deluxeRoom2.jpeg';
import businessImg3 from './img/deluxeRoom3.jpeg';
import businessImg4 from './img/deluxeRoom4.jpeg';

function HostelRooms() {
  const classRooms = [
    {
      titleText: 'Стандарт',
      square: 12,
      places: 2,
      bed: '1 большая двуспальная кровать',
      id: 1,
      img: economyImg,
      imgSlider: [
        { src: economyImg },
        { src: economyImg1 },
        { src: economyImg2 },
      ],
    },
    {
      titleText: 'Комфорт',
      square: 17,
      places: 2,
      bed: '1 большая двуспальная кровать',
      id: 2,
      img: comfortImg,
      imgSlider: [
        { src: comfortImg },
        { src: comfortImg1 },
        { src: comfortImg2 },
        { src: comfortImg3 },
        { src: comfortImg4 },
      ],
    },
    {
      titleText: 'Делюкс',
      square: 20,
      places: 4,
      id: 3,
      bed: '1 большая двуспальная кровать',
      img: businessImg,
      imgSlider: [
        { src: businessImg },
        { src: businessImg1 },
        { src: businessImg2 },
        { src: businessImg3 },
        { src: businessImg4 },

      ],
    },
  ];
  return (
    <div className={styles.container} id="rooms">
      <div className={styles.divTitle}>
        <p className={styles.titleText}>Категории номеров</p>
      </div>
      <div className={styles.containerCard}>
        {classRooms.length
          ? classRooms.map((el) => <HostelRoom key={el.id} item={el} />)
          : <p>Номера не найдены</p>
        }
      </div>
    </div>
  );
}

export default HostelRooms;
