import React from 'react';
import s from './SingleRoomCleaning.module.css';

const SingleRoomCleaning = ({ name, lastCleaning }) => (
  <div className={s.container}>
    <div className={s.row_container}>
      <span className={s.header}>Название</span>
      <span>{name}</span>
    </div>
    <div className={s.row_container}>
      <span className={s.header}>Дата последней убоки</span>
      <span>{lastCleaning}</span>
    </div>
    <button className={s.cleaned}>Убрано</button>
  </div>
);

export default SingleRoomCleaning;
