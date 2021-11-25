import React from 'react';
import { useDispatch } from 'react-redux';
import actionTypesCleaning from '../../redux/actionTypes/cleaningAT';
import s from './SingleRoomCleaning.module.css';

const SingleRoomCleaning = ({ name, lastCleaning, RoomId }) => {
  const dispatch = useDispatch();
  const currentDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
  const nextDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate() - 1}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypesCleaning.UPDATE_CLEANING_START,
      payload: { RoomId, date: currentDate },
    });
  };
  return (
    <form className={s.container} onSubmit={handleSubmit} >
      <div className={s.row_container}>
        <span className={s.header}>Название</span>
        <span>{name}</span>
      </div>
      <div className={s.row_container}>
        <span className={s.header}>Дата последней убоки</span>
        <span>{lastCleaning}</span>
      </div>
      {// eslint-disable-next-line no-nested-ternary
        lastCleaning === currentDate
          ? <button className={s.cleaned} disabled type='submit'>Убрано</button>
          : (lastCleaning === nextDate ? <button className={s.pendingCleaning} type='submit'>Уборка завтра</button>
            : <button className={s.needCleaning} type='submit'>Требуется уборка</button>)
      }
    </form>
  );
};

export default SingleRoomCleaning;
