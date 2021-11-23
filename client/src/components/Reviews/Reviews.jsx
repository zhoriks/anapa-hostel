import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import s from './Review.module.css';

const Reviews = () => {
  const [display, setDisplay] = useState(false);
  const reviews = useSelector((state) => state.adminReviews.list);
  const handleClickAccept = () => {
    setDisplay(true);
  };
  const handleClickDecline = () => {
    setDisplay(false);
  };
  return (
    <div className={s.mainContainer}>
      {reviews.map((el) => (
        <div className={s.container}>
          <div className={s.clientInfo}>
            <h3>{el.guestName}</h3>
            <span>{el.guestTelephone}</span>
          </div>
          <div className={s.review}>
            <p>{el.comment}</p>
            <div className={s.buttonGroup}>
              {display
                ? <button className={`${s.button} ${s.buttonAccept}`}>Принято</button>
                : <button className={`${s.button} ${s.buttonAccept}`} onClick={handleClickAccept}>Принять</button>
              }
              {display
                ? <button className={`${s.button} ${s.buttonDecline}`} onClick={handleClickDecline}>Отклонить</button>
                : <button className={`${s.button} ${s.buttonDecline}`}>Отклонено</button>
              }
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
