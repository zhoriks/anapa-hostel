import React, { useState } from 'react';
import s from './AdminCreateBookingForm.module.css';

const AdminCreateBookingForm = () => {
  const [num, setNum] = useState('');
  console.log(num, setNum);
  return (
    <div className={s.container}>
      <form className={s.form}>
        <div className={s.row}>
          <span>ФИО</span>
          <input type="text" placeholder='Имя' />
          <input type="text" placeholder='Фамилия' />
          <input type="text" placeholder='Отчество' />
        </div>

        <div className={s.row}>
          <span>Дата заезда</span>
          <input type="date" defaultValue={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`}
            min={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`} />
        </div>

        <div className={s.row}>
          <span>Дата выезда</span>
          <input type="date" defaultValue={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`}
            min={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`} />
        </div>
        <div className={s.row}>
          <span>Данные для хостела</span>
          <input type="number" placeholder='Гости' />
          <input type="text" placeholder='Номер комнаты' />
        </div>
        <div className={s.row}>
          <select>
            <option>Категория комнаты</option>
            <option value="Эконом">Эконом</option>
            <option value="Комфорт">Комфорт</option>
            <option value="Люкс">Люкс</option>
          </select>
          <select>
            <option>Статус</option>
            <option value="Ожидает подтвержения">Ожидает подтвержения</option>
            <option value="Подтверждено">Подтверждено</option>
            <option value="Проживает">Проживает</option>
          </select>
        </div>
        <div className={s.row}>
          <span>Контактные данные</span>
          <input type="email" placeholder='Email' />
          <input type="text" placeholder='Телефон' />
        </div>
        <div className={s.row}>
          <span>Комментарий</span>
          <textarea></textarea>
        </div>
      </form>
    </div>
  );
};

export default AdminCreateBookingForm;
