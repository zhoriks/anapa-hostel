import React from 'react';
import s from './Cleaning.module.css';
import SingleRoomCleaning from '../SingleRoomCleaning/SingleRoomCleaning';

const Cleaning = () => {
  const rooms = [
    {
      id: 1,
      name: 'Lastochka',
      lastCleaning: '22-11-2021',
    },
    {
      id: 2,
      name: 'Morshoy briz',
      lastCleaning: '22-11-2021',
    },
    {
      id: 3,
      name: 'Voshod',
      lastCleaning: '22-11-2021',
    },
    {
      id: 4,
      name: 'Zakat',
      lastCleaning: '22-11-2021',
    },
  ];
  return (
    <div className={s.container}>
      <div className={s.rooms}>
        {rooms.map((el) => <SingleRoomCleaning
         key={el.id} name={el.name} lastCleaning={el.lastCleaning} />)}
      </div>
    </div>
  );
};

export default Cleaning;
