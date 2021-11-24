import React from 'react';
import { AiOutlineSearch, AiFillBell } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import actionTypesBookings from '../../redux/actionTypes/bookingsAT';
import s from './GuestListNavbar.module.css';

const currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');

const GuestListNavbar = () => {
  const dispatch = useDispatch();
  const changeToEditState = () => {
    dispatch({ type: actionTypesBookings.EDIT_FORM_TOGGLE_BUTTON });
  };
  return (
    <div className={s.navbar}>
      <h1>Админ панель</h1>
      <div className={s.icon_navbar}>
        <AiOutlineSearch className={s.icon} />
        <AiFillBell className={s.icon} />
        <p className={s.date}>{currentDate}</p>
        <button onClick={changeToEditState} className={s.select}>Редактировать</button>
        <Link to="/admin/create-booking" className={s.select}>Добавить бронирование</Link>
      </div>
    </div>
  );
};

export default GuestListNavbar;
