import React from 'react';
// import { useSelector } from 'react-redux';
import s from './Bookings.module.css';

const Bookings = () => {
  // const bookings = useSelector((state) => state.booking.list);
  const client = [
    {
      guestName: 'Дмитрий',
      telephone: '+79825091864',
      checkInDate: 'Oct 29th, 2020',
      checkOutDate: 'Oct 31th, 2020',
      comment: 'Пусто',
      categoryRoom: 'Queen A-2345',
      status: 'Ожидает подтверждения',
    },
    {
      guestName: 'Дмитрий',
      telephone: '+79825091864',
      checkInDate: 'Oct 29th, 2020',
      checkOutDate: 'Oct 31th, 2020',
      comment: 'Пусто',
      categoryRoom: 'Queen A-2345',
      status: 'Ожидает подтверждения',
    },
    {
      guestName: 'Дмитрий',
      telephone: '+79825091864',
      checkInDate: 'Oct 29th, 2020',
      checkOutDate: 'Oct 31th, 2020',
      comment: 'Пусто',
      categoryRoom: 'Queen A-2345',
      status: 'Ожидает подтверждения',
    },
    {
      guestName: 'Дмитрий',
      telephone: '+79825091864',
      checkInDate: 'Oct 29th, 2020',
      checkOutDate: 'Oct 31th, 2020',
      comment: 'Пусто',
      categoryRoom: 'Queen A-2345',
      status: 'Ожидает подтверждения',
    },
  ];
  return (
    <div className={s.bookings_main}>
      <div className={s.navbar}>
        <h3>Guest</h3>
        <h3>Telephone</h3>
        <h3>Check in</h3>
        <h3>Check out</h3>
        <h3>Request</h3>
        <h3>Room type</h3>
        <h3>Status</h3>
      </div>

      {client.map((el) => (
        <div className={s.client_info}>
          <p>{el.guestName}</p>
          <p>{el.telephone}</p>
          <p>{el.checkInDate}</p>
          <p>{el.checkOutDate}</p>
          <p>{el.comment}</p>
          <p>{el.categoryRoom}</p>
          <p className={s.pending}>{el.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Bookings;