import React from 'react';
import SingleRoom from '../SingleRoom/SingleRoom';
import s from './Rooms.module.css';

const Rooms = () => (
  <div className={s.main_container}>
    <div className={s.container}>
      <SingleRoom />
      <SingleRoom />
      <SingleRoom />
      <SingleRoom />
      <SingleRoom />

    </div>
  </div>
);

export default Rooms;
