import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import actionTypesBookings from '../../redux/actionTypes/bookingsAT';
import s from './AdminCreateBookingForm.module.css';
import useLocalStorage from '../data/helpData/useLocalStorage';
import actionTypesRooms from '../../redux/actionTypes/roomsAT';

const AdminCreateBookingForm = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.room.list);
  const history = useHistory();
  const [firstName, setFirstName] = useLocalStorage('firstName', '');
  const [lastName, setLastName] = useLocalStorage('lastName', '');
  const [patronymic, setPatronymic] = useLocalStorage('patronymic', '');
  const [categoryRoom, setCategoryRoom] = useLocalStorage('categoryRoom', '');
  const [guestsNumber, setGuestsNumber] = useLocalStorage('guestsNumber', '');
  const [email, setEmail] = useLocalStorage('email', '');
  const [telephone, setTelephone] = useLocalStorage('telephone', '');
  const [status, setStatus] = useLocalStorage('status', '');
  const [RoomId, setRoomiId] = useLocalStorage('RoomId', '');
  const [comment, setComment] = useLocalStorage('comment', '');

  const [nextDay, setNextDay] = useState(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`);

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
    const selectedRoom = rooms.find((el) => el.id === +RoomId);
    dispatch({ type: actionTypesBookings.CREATE_BOOKING_START, payload: clientData });
    dispatch({
      type: actionTypesRooms.EDIT_ROOMS_FULLNESS_START,
      payload: {
        guestNumber: +guestsNumber,
        roomId: +RoomId,
        fullness: +selectedRoom.fullness,
      },
    });
    localStorage.clear();
    history.push('/admin');
  };
  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.row}>
          <span>ФИО</span>
          <input type="text" required name='firstName' placeholder='Имя' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <input type="text" required name='lastName' placeholder='Фамилия' value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <input type="text" required name='patronymic' placeholder='Отчество' value={patronymic} onChange={(e) => setPatronymic(e.target.value)}/>
        </div>

        <div className={s.row}>
          <span>Дата заезда</span>
          <input type="date" name='checkInDate' defaultValue={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`}
            min={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`}
            onChange={(event) => setNextDay(event.target.value)} />
        </div>

        <div className={s.row}>
          <span>Дата выезда</span>
          <input type="date" name='checkOutDate' defaultValue={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate() + 1}`}
            min={`${new Date(nextDay).getFullYear()}-${new Date(nextDay).getMonth() + 1}-${new Date(nextDay).getDate() + 1}`} />
        </div>
        <div className={s.row}>
          <span>Данные для хостела</span>
          <input type="number" required name='guestsNumber' placeholder='Гости' value={guestsNumber} onChange={(e) => setGuestsNumber(e.target.value)} />
          <input type="text" required name='RoomId' placeholder='Номер комнаты' value={RoomId} onChange={(e) => setRoomiId(e.target.value)} />
        </div>
        <div className={s.row}>
          <select required name='categoryRoom' value={categoryRoom} onChange={(e) => setCategoryRoom(e.target.value)}>
            <option>Категория комнаты</option>
            <option value="Эконом">Эконом</option>
            <option value="Комфорт">Комфорт</option>
            <option value="Люкс">Люкс</option>
          </select>
          <select required name='status' value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Статус</option>
            <option value="Ожидает подтвержения">Ожидает подтвержения</option>
            <option value="Подтверждено">Подтверждено</option>
            <option value="Проживает">Проживает</option>
          </select>
        </div>
        <div className={s.row}>
          <span>Контактные данные</span>
          <input required type="email" name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <NumberFormat required name="phoneNumber" format="+7 (###) ###-####" mask="_" type="text" placeholder='+ 7 (___) ___-____' value={telephone} onChange={(e) => setTelephone(e.target.value)}/>
        </div>
        <div className={s.row}>
          <span>Комментарий</span>
          <textarea name='comment' value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
        </div>
        <div className={s.buttonContainer}>
          <button type='submit' className={s.submit}>Отправить</button>
        </div>
      </form>
    </div>
  );
};

export default AdminCreateBookingForm;
