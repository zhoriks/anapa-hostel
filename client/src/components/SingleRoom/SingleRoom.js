import React from 'react';
import s from './SingleRoom.module.css';

const SingleRoom = () => (
    <div className={s.container}>
      <div className={s.img_container}>
        <img src="/room.jpeg" alt="" className={s.img} />
        <span className={s.status}>Availible</span>
        <span className={s.room_name}>Name</span>
      </div>
      <div className={s.row_container}>
        <span>3.4</span>
        <span>reviews</span>
      </div>
      <div className={s.row_container}>
        <span>Floor</span>
        <span>G-05</span>
      </div>
      <div className={s.row_container}>
        <span>Bed type</span>
        <span>Double Bed</span>
      </div>
    </div>
);

export default SingleRoom;
