import React from 'react';
import { useSelector } from 'react-redux';
import s from './Review.module.css';

const Reviews = () => {
  const reviews = useSelector((state) => state.adminReviews.list);
  // console.log(reviews);
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
              <button className={`${s.button} ${s.buttonAccept}`}>Принять</button>
              <button className={`${s.button} ${s.buttonDecline}`}>Отклонить</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
