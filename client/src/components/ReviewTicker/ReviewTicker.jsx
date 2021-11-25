import { useSelector } from 'react-redux';

import ReviewItem from '../ReviewItem/ReviewItem.jsx';
import ReviewForm from '../ReviewForm/ReviewForm.jsx';
import styles from './ReviewTicker.module.css';

// Компонент, отвечающий за бегущую строку с отзывами

function ReviewTicker() {
  const reviewsFromDB = useSelector((state) => state.reviews.list);

  return (
    <section>
      <div className={styles.titleDiv} id="reviewTicker">
        <h1 className={styles.titleDivBig}>Что говорят о нашем отеле клиенты?</h1>
        <p>
          Мы всегда стараемся стать лучше для вас и открыты к новому <br/>
           сотрудничеству. Не сдерживайте себя - расскажите
        </p>
      </div>
      <div className={styles.group}>
        <div className={styles.row}>
        {
          reviewsFromDB.length
            ? reviewsFromDB.map((el) => <ReviewItem key={el.id} item={el}/>)
            : <p>Ошибка отображения информации</p>
        }
        </div>
        <div className={styles.row}>
        {
          reviewsFromDB.length
            ? reviewsFromDB.map((el) => <ReviewItem key={el.id} item={el}/>)
            : <p>Ошибка отображения информации</p>
        }
        </div>
      </div>
      <ReviewForm/>
    </section>
  );
}

export default ReviewTicker;
