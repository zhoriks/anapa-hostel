import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actionTypesAdminReviews from '../../redux/actionTypes/adminReviewsAT';
import s from './Review.module.css';

const Reviews = () => {
  const reviews = useSelector((state) => state.adminReviews.list);
  const dispatch = useDispatch();
  const changeModerate = (moderate, id) => {
    dispatch({ type: actionTypesAdminReviews.EDIT_REVIEWS_START, payload: { moderate, id } });
  };
  return (
    <div className={s.mainContainer}>
      {reviews.map((el) => (
        <div className={s.container} key={el.id}>
          <div className={s.clientInfo}>
            <h3>{el.guestName}</h3>
            <span>{el.guestTelephone}</span>
          </div>
          <div className={s.review}>
            <p>{el.comment}</p>
            <div className={s.buttonGroup}>
              {
                // eslint-disable-next-line no-extra-boolean-cast
                el.moderate === 'true'
                  ? <button className={`${s.button} ${s.buttonAccept}`} style={{ cursor: 'auto' }}>Принято</button>
                  : <button className={`${s.button} ${s.buttonAccept}`} onClick={() => changeModerate(el.moderate, el.id)} >Принять</button>
              }
              {
                // eslint-disable-next-line no-extra-boolean-cast
                el.moderate === 'true'
                  ? <button className={`${s.button} ${s.buttonDecline}`} onClick={() => {
                    changeModerate(el.moderate, el.id);
                  }} >Отклонить</button>
                  : <button className={`${s.button} ${s.buttonDecline}`} style={{ cursor: 'auto' }}>Отклонено</button>
              }
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
