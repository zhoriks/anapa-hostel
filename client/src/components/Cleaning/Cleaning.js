import React from 'react';
import { useSelector } from 'react-redux';
import s from './Cleaning.module.css';
import SingleRoomCleaning from '../SingleRoomCleaning/SingleRoomCleaning';

const Cleaning = () => {
  const cleanings = useSelector((state) => state.cleaning.list);

  return (
    <div className={s.container}>
      <div className={s.rooms}>
        {cleanings.map((cleaning) => (
          <SingleRoomCleaning
          key={cleaning.id} RoomId={cleaning.RoomId}
          name={cleaning.Room.name} lastCleaning={cleaning.dateOfCleaning} />
        ))}
      </div>
    </div>
  );
};

export default Cleaning;
