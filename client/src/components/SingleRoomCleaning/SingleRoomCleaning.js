import React from 'react';
import { useDispatch } from 'react-redux';
import actionTypesCleaning from '../../redux/actionTypes/cleaningAT';
import s from './SingleRoomCleaning.module.css';

const SingleRoomCleaning = ({ name, lastCleaning, RoomId }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
    dispatch({
      type: actionTypesCleaning.UPDATE_CLEANING_START,
      payload: { RoomId, date: newDate },
    });
  };
  return (
    <form className={s.container} onSubmit={handleSubmit}>
      <div className={s.row_container}>
        <span className={s.header}>Название</span>
        <span>{name}</span>
      </div>
      <div className={s.row_container}>
        <span className={s.header}>Дата последней убоки</span>
        <span>{lastCleaning}</span>
      </div>
      <button className={s.cleaned} type='submit'>Убрано</button>
    </form>
  );
};

export default SingleRoomCleaning;
