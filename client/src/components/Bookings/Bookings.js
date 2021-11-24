import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actionTypesBookings from '../../redux/actionTypes/bookingsAT';
// import bookingsAction from '../../redux/actionCreators/bookingsAC';
import s from './Bookings.module.css';

const Bookings = () => {
  const bookings = useSelector((state) => state.booking.list);
  const dispatch = useDispatch();
  const editForm = useSelector((state) => state.booking.editForm);

  const findCurrentBookingComment = (id) => {
    const book = bookings.filter((el) => id === el.id);
    return book[0].comment;
  };

  const findCurrentBookingStatus = (id) => {
    const book = bookings.filter((el) => id === el.id);
    return book[0].status;
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();
    const { comment, status } = e.target;
    dispatch({
      type: actionTypesBookings.EDIT_FORM_SUBMIT_STOP,
      payload: { id, comment: comment.value, status: status.value },
    });
  };
  return (
    <div className={s.bookings_main}>
      <div className={s.navbar}>
        <h3>Постетитель</h3>
        <h3>Телефон</h3>
        <h3>Дата заезда</h3>
        <h3>Дата выезда</h3>
        <h3>Тип комнаты</h3>
        <h3>Комментарий</h3>
        <h3>Статус</h3>
      </div>

      {bookings.map((el) => (
        <form className={s.client_info} key={el.id} onSubmit={(e) => handleSubmit(e, el.id)}>
          <div>{el.guestFirstName}</div>
          <div>{el.telephone}</div>
          <div>{el.checkInDate}</div>
          <div>{el.checkOutDate}</div>
          <div>{el.categoryRoom}</div>
          {!editForm ? <div>{el.comment}</div>
            : <input type='text' name='comment' required className={s.formInput} defaultValue={findCurrentBookingComment(el.id)} ></input>}
          {!editForm ? <div className={s.pending}>{el.status}</div>
            : <select className={s.select} name='status' aria-label="Default select example" defaultValue={findCurrentBookingStatus(el.id)}>
              <option value="Проживает">Проживает</option>
              <option value="Подтверждено">Подтверждено</option>
              <option value="Ожидает подтвержения">Ожидает подтвержения</option>
            </select>}
          {editForm && <button className={s.submitFormButton} type="submit">Отправить</button>}
        </form>
      ))}
    </div>
  );
};

export default Bookings;
