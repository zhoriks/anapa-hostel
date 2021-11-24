import React from 'react';
import { useSelector } from 'react-redux';
import s from '../Bookings/Bookings.module.css';

const Guest = () => {
  const guests = useSelector((state) => state.guest.list);
  return (
    <div className={s.bookings_main}>
      <div className={s.navbar}>
        <h3>Имя</h3>
        <h3>Фамилия</h3>
        <h3>Телефон</h3>
        <h3>Email</h3>
        <h3>Комментарий</h3>
        <h3>Статус</h3>
      </div>

      {guests.map((el) => (
        <form className={s.client_info} key={el.id}>
          <div>{el.guestFirstName}</div>
          <div>{el.guestLastName}</div>
          <div>{el.telephone}</div>
          <div>{el.email}</div>
          <div>{el.comment}</div>
          <div>{el.status}</div>
        </form>
      ))}
    </div>
  );
};

export default Guest;
