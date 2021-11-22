import React from 'react';
import s from './SingleRoom.module.css';

const SingleRoom = ({
  name, fullness, number, type,
}) => (
    <div className={s.container}>
      <div className={s.img_container}>
        <img src="/room.jpeg" alt="" className={s.img} />
        <span className={s.status}>Availible</span>
        <span className={s.room_name}>{name}</span>
      </div>
      <div className={s.row_container}>
        <span>Fullness</span>
        <span>{fullness}</span>
      </div>
      <div className={s.row_container}>
        <span>Number of beds</span>
        <span>{number}</span>
      </div>
      <div className={s.row_container}>
        <span>Type</span>
        <span>{type}</span>
      </div>
    </div>
);

export default SingleRoom;
