import React from 'react';
import { AiOutlineSearch, AiFillBell } from 'react-icons/ai';
import s from './GuestListNavbar.module.css';

const GuestListNavbar = () => (
  <div className={s.navbar}>
    <h1>GuestList</h1>
    <div className={s.icon_navbar}>
      <AiOutlineSearch className={s.icon} />
      <AiFillBell className={s.icon} />
      <select className={s.select} aria-label="Default select example">
        <option selected>February 8th, 2021</option>
        <option value="1">Date</option>
      </select>
      <select className={s.select} aria-label="Default select example">
        <option selected>RU</option>
        <option value="1">EN</option>
      </select>
      </div>
  </div>
);

export default GuestListNavbar;
