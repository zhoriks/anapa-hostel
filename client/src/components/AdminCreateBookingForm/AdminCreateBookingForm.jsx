import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import actionTypesBookings from '../../redux/actionTypes/bookingsAT';
import s from './AdminCreateBookingForm.module.css';

const AdminCreateBookingForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const clientData = {
      guestFirstName: e.target.firstName.value,
      guestLastName: e.target.lastName.value,
      guestPatronymic: e.target.patronymic.value,
      checkInDate: e.target.checkInDate.value,
      checkOutDate: e.target.checkOutDate.value,
      categoryRoom: e.target.categoryRoom.value,
      guestsNumber: e.target.guestsNumber.value,
      email: e.target.email.value,
      telephone: e.target.phoneNumber.value,
      status: e.target.status.value,
      RoomId: e.target.RoomId.value,
      comment: e.target.comment.value,
    };
    dispatch({ type: actionTypesBookings.CREATE_BOOKING_START, payload: clientData });
    history.push('/admin');
  };
  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.row}>
          <span>ФИО</span>
          <input type="text" name='firstName' placeholder='Имя' />
          <input type="text" name='lastName' placeholder='Фамилия' />
          <input type="text" name='patronymic' placeholder='Отчество' />
        </div>

        <div className={s.row}>
          <span>Дата заезда</span>
          <input type="date" name='checkInDate' defaultValue={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`}
            min={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`} />
        </div>

        <div className={s.row}>
          <span>Дата выезда</span>
          <input type="date" name='checkOutDate' defaultValue={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`}
            min={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`} />
        </div>
        <div className={s.row}>
          <span>Данные для хостела</span>
          <input type="number" name='guestsNumber' placeholder='Гости' />
          <input type="text" name='RoomId' placeholder='Номер комнаты' />
        </div>
        <div className={s.row}>
          <select name='categoryRoom'>
            <option>Категория комнаты</option>
            <option value="Эконом">Эконом</option>
            <option value="Комфорт">Комфорт</option>
            <option value="Люкс">Люкс</option>
          </select>
          <select name='status'>
            <option>Статус</option>
            <option value="Ожидает подтвержения">Ожидает подтвержения</option>
            <option value="Подтверждено">Подтверждено</option>
            <option value="Проживает">Проживает</option>
          </select>
        </div>
        <div className={s.row}>
          <span>Контактные данные</span>
          <input type="email" name='email' placeholder='Email' />
          <input type="text" name='phoneNumber' placeholder='Телефон' />
        </div>
        <div className={s.row}>
          <span>Комментарий</span>
          <textarea name='comment'></textarea>
        </div>
        <div className={s.buttonContainer}>
          <button type='submit' className={s.submit}>Отправить</button>
        </div>
      </form>
    </div>
  );
};

export default AdminCreateBookingForm;
