import { useDispatch, useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import Popup from 'reactjs-popup';
import actionTypesReviewsForm from '../../redux/actionTypes/reviewsFormAT';
import styles from './ReviewForm.module.css';
import 'reactjs-popup/dist/index.css';

function ReviewForm() {
  const reviewSent = useSelector((state) => state.newReview.sent);
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    const reviewData = {
      guestName: event.target.name.value,
      guestTelephone: event.target.phone.value,
      review: event.target.review.value,
    };

    dispatch({ type: actionTypesReviewsForm.SEND_REVIEWS_IN_DB_START, payload: reviewData });
  }

  return (

    reviewSent
      ? <Popup
        trigger={<button className={styles.reviewButton}> Оставить отзыв </button>}
        modal
        nested
      >
        {(close) => (
          <>
            <div className={styles.imageDiv}></div>
            <div className={styles.modal}>
              <button className={styles.close} onClick={close}>
                &times;
              </button>
              <div className={styles.headerSent}> Отзыв отправлен </div>
              <div className={styles.content}>
                <p>Спасибо за обратную связь!</p>
              </div>
              <div className={styles.actions}>
                <button
                  className={styles.button}
                  onClick={() => {
                    close();
                  }}
                >
                  Закрыть
                </button>
              </div>
            </div>
          </>
        )}
      </Popup>
      : <Popup
        trigger={<button className={styles.reviewButton}> Оставить отзыв </button>}
        modal
        nested
      >
        {(close) => (
          <>
            <div className={styles.imageDiv}></div>
            <div className={styles.modal}>
              <button className={styles.close} onClick={close}>
                &times;
              </button>
              <div className={styles.header}> Оставьте отзыв о нашей работе </div>
              <div className={styles.content}>
                <p>Расскажите о своих впечатлениях, нам важна обратная связь</p>
              </div>
              <form name="reviewForm" className={styles.reviewForm} action="" method="" onSubmit={handleSubmit}>
                <input type="text" name="name" className={styles.reviewFormName} id="" placeholder='Ваше имя' />
                <NumberFormat name="phone" className={styles.reviewFormPhone} format="+7 (###) ###-####" mask="_" type="tel" placeholder='+ 7 (___) ___-____' />
                <textarea name="review" className={styles.reviewFormTextArea} cols="30" rows="2" placeholder="Ваш отзыв"></textarea>
                <button className={styles.button} type="submit">Отправить</button>
              </form>
            </div>
          </>
        )}
      </Popup>
  );
}

export default ReviewForm;
