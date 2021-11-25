import React from 'react';
import { AiOutlineSearch, AiFillBell } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import actionTypesBookings from '../../redux/actionTypes/bookingsAT';
import s from './GuestListNavbar.module.css';
import logo from './img/logo2.png';

const currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');

const GuestListNavbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const changeToEditState = () => {
    dispatch({ type: actionTypesBookings.EDIT_FORM_TOGGLE_BUTTON });
  };
  return (
    <div className={s.navbar}>
      <h1>HOSTEL CRM</h1>
      <div className={s.icon_navbar}>
        <AiOutlineSearch className={s.icon} />
        <AiFillBell className={s.icon} />
        <p className={s.date}>{currentDate}</p>
        {document.location.pathname === '/admin'
          ? <button onClick={changeToEditState} className={s.select}>Редактировать</button>
          : null
          }
        <Link to="/admin/create-booking" className={s.select}>Добавить бронирование</Link>
      </div>
      <img src={logo} className={s.logo} alt="" onClick={() => history.push('/admin')} />
    </div>
  );
};

export default GuestListNavbar;
