import React from 'react';
import { useSelector } from 'react-redux';
// import bookingsAction from '../../redux/actionCreators/bookingsAC';
import s from './Bookings.module.css';

const Bookings = () => {
  // const bookings = useSelector((state) => state.booking.list);
  const editForm = useSelector((state) => state.booking.editForm);
  const client = [
    {
      id: 1,
      guestName: 'Дмитрий',
      telephone: '+79825091864',
      checkInDate: 'Oct 29th, 2020',
      checkOutDate: 'Oct 31th, 2020',
      comment: 'Пусто',
      categoryRoom: 'Queen A-2345',
      status: 'Ожидает подтверждения',
    },
    {
      id: 2,
      guestName: 'Дмитрий',
      telephone: '+79825091864',
      checkInDate: 'Oct 29th, 2020',
      checkOutDate: 'Oct 31th, 2020',
      comment: 'Пусто',
      categoryRoom: 'Queen A-2345',
      status: 'Ожидает подтверждения',
    },
    {
      id: 3,
      guestName: 'Дмитрий',
      telephone: '+79825091864',
      checkInDate: 'Oct 29th, 2020',
      checkOutDate: 'Oct 31th, 2020',
      comment: 'Пусто',
      categoryRoom: 'Queen A-2345',
      status: 'Ожидает подтверждения',
    },
    {
      id: 4,
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
        <form className={s.client_info} key={el.id}>
          <p>{el.guestName}</p>
          <p>{el.telephone}</p>
          <p>{el.checkInDate}</p>
          <p>{el.checkOutDate}</p>
          {!editForm ? <p>{el.comment}</p> : <input type='text'></input>}
          <p>{el.categoryRoom}</p>
          {!editForm ? <p className={s.pending}>{el.status}</p> : <input type='text'></input>}
        </form>
      ))}
    </div>
  );
};

export default Bookings;
