import React from 'react';
import s from './SingleRoom.module.css';

const SingleRoom = ({
  name, fullness, number, type,
}) => (
  <div className={s.container}>
    <span className={s.room_name}>{name}</span>
    <div className={s.img_container}>
      <img src="/room.jpeg" alt="" className={s.img} />
      {fullness === number
        ? <span className={`${s.status} ${s.taken}`}>Занят</span>
        : <span className={`${s.status} ${s.available}`}>Доступен</span>
      }
      {/* <span className={s.room_name}>{name}</span> */}
    </div>
    <div className={s.row_container}>
      <span style={{ fontWeight: 'bold' }}>Заполненность</span>
      <span>{fullness}</span>
    </div>
    <div className={s.row_container}>
      <span style={{ fontWeight: 'bold' }}>Количество кроватей</span>
      <span>{number}</span>
    </div>
    <div className={s.row_container}>
      <span style={{ fontWeight: 'bold' }}>Тип</span>
      <span>{type}</span>
    </div>
  </div>
);

export default SingleRoom;
