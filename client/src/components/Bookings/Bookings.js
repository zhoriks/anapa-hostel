import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actionTypesBookings from '../../redux/actionTypes/bookingsAT';
// import bookingsAction from '../../redux/actionCreators/bookingsAC';
import s from './Bookings.module.css';

const Bookings = () => {
  const bookings = useSelector((state) => state.booking.list);
  const dispatch = useDispatch();
  const editForm = useSelector((state) => state.booking.editForm);
  // const [comment, setComment] = useState('');
  // const handleCommentChange = (e) => {
  //   setComment(e.target.value);
  // };

  // const [status, setStatus] = useState('');
  // const handleStatusChange = (e) => {
  //   setStatus(e.target.value);
  // };

  const handleSubmit = (e, id) => {
    e.preventDefault();
    const { comment, status } = e.target;
    // console.log(id, comment.value, status.value);
    dispatch({
      type: actionTypesBookings.EDIT_FORM_SUBMIT_STOP,
      payload: { id, comment: comment.value, status: status.value },
    });
  };

  // const client = [
  //   {
  //     id: 1,
  //     guestName: 'Дмитрий',
  //     telephone: '+79825091864',
  //     checkInDate: 'Oct 29th, 2020',
  //     checkOutDate: 'Oct 31th, 2020',
  //     comment: 'Пусто',
  //     categoryRoom: 'Queen A-2345',
  //     status: 'Ожидает подтверждения',
  //   },
  //   {
  //     id: 2,
  //     guestName: 'Дмитрий',
  //     telephone: '+79825091864',
  //     checkInDate: 'Oct 29th, 2020',
  //     checkOutDate: 'Oct 31th, 2020',
  //     comment: 'Пусто',
  //     categoryRoom: 'Queen A-2345',
  //     status: 'Ожидает подтверждения',
  //   },
  //   {
  //     id: 3,
  //     guestName: 'Дмитрий',
  //     telephone: '+79825091864',
  //     checkInDate: 'Oct 29th, 2020',
  //     checkOutDate: 'Oct 31th, 2020',
  //     comment: 'Пусто',
  //     categoryRoom: 'Queen A-2345',
  //     status: 'Ожидает подтверждения',
  //   },
  //   {
  //     id: 4,
  //     guestName: 'Дмитрий',
  //     telephone: '+79825091864',
  //     checkInDate: 'Oct 29th, 2020',
  //     checkOutDate: 'Oct 31th, 2020',
  //     comment: 'Пусто',
  //     categoryRoom: 'Queen A-2345',
  //     status: 'Ожидает подтверждения',
  //   },
  // ];
  return (
    <div className={s.bookings_main}>
      <div className={s.navbar}>
        <h3>Guest</h3>
        <h3>Telephone</h3>
        <h3>Check in</h3>
        <h3>Check out</h3>
        <h3>Room type</h3>
        <h3>Request</h3>
        <h3>Status</h3>
      </div>

      {bookings.map((el) => (
        <form className={s.client_info} key={el.id} onSubmit={(e) => handleSubmit(e, el.id)}>
          <div>{el.guestFirstName}</div>
          <div>{el.telephone}</div>
          <div>{el.checkInDate}</div>
          <div>{el.checkOutDate}</div>
          <div>{el.categoryRoom}</div>
          {!editForm ? <div>{el.comment}</div>
            : <input type='text' name='comment' className={s.formInput} /* value={comment} onChange={handleCommentChange} */ ></input>}
          {!editForm ? <div className={s.pending}>{el.status}</div>
            : <select className={s.select} name='status' aria-label="Default select example">
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
// {/* <input type='text' name='status' className={s.formInput} /* value={status}
//  onChange={handleStatusChange} */></input> */}
