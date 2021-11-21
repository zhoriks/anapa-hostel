import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actionTypesBookings from '../../redux/actionTypes/bookingsAT';
// import bookingsAction from '../../redux/actionCreators/bookingsAC';
import s from './Bookings.module.css';

const Bookings = () => {
  // const bookings = useSelector((state) => state.booking.list);
  const dispatch = useDispatch();
  const editForm = useSelector((state) => state.booking.editForm);
  const [comment, setComment] = useState('');
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const [status, setStatus] = useState('');
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: actionTypesBookings.EDIT_FORM_SUBMIT_STOP, payload: { comment, status } });
  };

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
        <form className={s.client_info} key={el.id} onSubmit={handleSubmit}>
          <p>{el.guestName}</p>
          <p>{el.telephone}</p>
          <p>{el.checkInDate}</p>
          <p>{el.checkOutDate}</p>
          {!editForm ? <p>{el.comment}</p>
            : <input type='text' value={comment} onChange={handleCommentChange} ></input>}
          <p>{el.categoryRoom}</p>
          {!editForm ? <p className={s.pending}>{el.status}</p>
            : <input type='text' value={status} onChange={handleStatusChange} ></input>}
          {editForm && <button type="submit">Отправить</button>}
        </form>
      ))}
    </div>
  );
};

export default Bookings;
