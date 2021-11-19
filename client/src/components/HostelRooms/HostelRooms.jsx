import React from 'react';
import HostelRoom from '../HostelRoom/HostelRoom.jsx';
import styles from './HostelRooms.module.css';
import economyImg from './img/12.jpeg';
import comfortImg from './img/13.jpeg';
import businessImg from './img/14.jpeg';

function HostelRooms() {
  const classRooms = [
    {
      titleText: 'Эконом',
      bodyText: 'Тут будет краткое описание номеров.',
      price: 900,
      id: 1,
      img: economyImg,
    },
    {
      titleText: 'Комфорт',
      bodyText: 'Тут будет краткое описание номеров.',
      price: 1900,
      id: 2,
      img: comfortImg,
    },
    {
      titleText: 'Бизнес',
      bodyText: 'Тут будет краткое описание номеров.',
      price: 4900,
      id: 3,
      img: businessImg,
    },
  ];
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.titleText}>Выберите категорию номера</p>
      </div>
      <div className={styles.containerCard}>
        {classRooms.length
          ? classRooms.map((el) => <HostelRoom key={el.id} item={el}/>)
          : <p>Номера не найдены</p>
        }
      </div>
    </div>
  );
}

export default HostelRooms;
