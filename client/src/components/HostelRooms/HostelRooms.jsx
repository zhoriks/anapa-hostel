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
      titleText: 'Эконом',
      square: 20,
      places: 'до 8-ми',
      bed: '4 двухъярусных кровати',
      bath: 'Общий душ',
      kitchen: 'Общая кухня',
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
      square: 40,
      places: 'до 4-х',
      bed: '2 двухъярусных кровати',
      bath: 'Душ в номере',
      kitchen: 'Собственная мини-кухня',
      id: 2,
      img: comfortImg,
      imgSlider: [
        { src: comfortImg1 },
        { src: comfortImg },
        { src: comfortImg2 },
        { src: comfortImg3 },
        { src: comfortImg4 },
      ],
    },
    {
      titleText: 'Люкс',
      square: 80,
      places: 'до 2-х',
      bath: 'Душ в номере',
      kitchen: 'Полноценная кухня',
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
        <p className={styles.bodyText}>
          Ищете место для себя или своих близких - в нашем гостевом доме <br/>
          Вы обязательно найдете подходящий вариант</p>
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
