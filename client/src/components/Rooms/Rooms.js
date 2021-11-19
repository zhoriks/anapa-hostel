import React from 'react';
import { useSelector } from 'react-redux';
import SingleRoom from '../SingleRoom/SingleRoom';
import s from './Rooms.module.css';

const Rooms = () => {
  const rooms = useSelector((state) => state.room.list);
  console.log(rooms);
  return (
    <div className={s.main_container}>
      <div className={s.container}>
        {rooms.map((el) => <SingleRoom name={el.name}
        fullness={el.fullness} type={el.type} number={el.numberOfBeds}/>)}
      </div>
    </div>
  );
};

export default Rooms;
