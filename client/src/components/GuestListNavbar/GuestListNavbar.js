import React from 'react';
import { AiOutlineSearch, AiFillBell } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import actionTypesBookings from '../../redux/actionTypes/bookingsAT';
import s from './GuestListNavbar.module.css';

const GuestListNavbar = () => {
  const dispatch = useDispatch();
  const changeToEditState = () => {
    dispatch({ type: actionTypesBookings.EDIT_FORM_TOGGLE_BUTTON });
  };
  return (
  <div className={s.navbar}>
    <h1>GuestList</h1>
    <div className={s.icon_navbar}>
      <AiOutlineSearch className={s.icon} />
      <AiFillBell className={s.icon} />
      <select className={s.select} aria-label="Default select example">
        <option>February 8th, 2021</option>
        <option value="1">Date</option>
      </select>
      <button onClick={changeToEditState} className={s.select}>Редактировать</button>
      </div>
  </div>
  );
};

export default GuestListNavbar;
