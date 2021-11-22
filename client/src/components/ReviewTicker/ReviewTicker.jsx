import ReviewItem from '../ReviewItem/ReviewItem.jsx';
import styles from './ReviewTicker.module.css';
import user from '../data/img/user.png';
import ReviewForm from '../ReviewForm/ReviewForm.jsx';

// Компонент, отвечающий за бегущую строку с отзывами

function ReviewTicker() {
  const reviews = [
    {
      id: 1,
      img: user,
      name: 'Олег',
      description: 'Первый отзыв, почему так хорошо, а не иначе, или да, или нет, хорошо, а не иначе',
      occupation: 'Преподаватель',
    },
    {
      id: 2,
      img: user,
      name: 'Юра',
      description: 'Второй отзыв, почему так хорошо, а не иначе, или да, или нет, хорошо, а не иначе',
      occupation: 'Преподаватель',
    },
    {
      id: 3,
      img: user,
      name: 'Лена',
      description: 'Третий отзыв, почему так хорошо, а не иначе, или да, или нет, хорошо, а не иначе',
      occupation: 'Преподаватель',
    },
    {
      id: 4,
      img: user,
      name: 'Катя',
      description: 'Четвертый отзыв, почему так хорошо, а не иначе, или да, или нет, хорошо, а не иначе',
      occupation: 'Студент',
    },
    {
      id: 5,
      img: user,
      name: 'Кристина',
      description: 'Пятый отзыв, почему так хорошо, а не иначе, или да, или нет, хорошо, а не иначе, или да',
      occupation: 'Студент',
    },
    {
      id: 6,
      img: user,
      name: 'Эдуард',
      description: 'Шестой отзыв, почему так хорошо, а не иначе, или да, или нет, хорошо, а не иначе, или да',
      occupation: 'Студент',
    },
    {
      id: 7,
      img: user,
      name: 'Алексей',
      description: 'Седьмой отзыв, почему так хорошо, а не иначе, или да, или нет, хорошо, а не иначе, или да',
      occupation: 'Студент',
    },
    {
      id: 8,
      img: user,
      name: 'Жора',
      description: 'Восьмой отзыв, почему так хорошо, а не иначе, или да, или нет, хорошо, а не иначе, или да',
      occupation: 'Студент',
    },
    {
      id: 9,
      img: user,
      name: 'Денис',
      description: 'Восьмой отзыв, почему так хорошо, а не иначе, или да, или нет, хорошо, а не иначе, или да',
      occupation: 'Студент',
    },
    {
      id: 10,
      img: user,
      name: 'Аюша',
      description: 'Восьмой отзыв, почему так хорошо, а не иначе, или да, или нет, хорошо, а не иначе, или да',
      occupation: 'Студент',
    },
    {
      id: 11,
      img: user,
      name: 'Иван',
      description: 'Восьмой отзыв, почему так хорошо, а не иначе, или да, или нет, хорошо, а не иначе, или да',
      occupation: 'Студент',
    },
    {
      id: 12,
      img: user,
      name: 'Женя',
      description: 'Восьмой отзыв, почему так хорошо, а не иначе, или да, или нет, хорошо, а не иначе, или да',
      occupation: 'Студент',
    },
  ];

  return (
    <section>
      <div className={styles.titleDiv}>
        <h1 className={styles.titleDivBig}>Что говорят о наше отеле клиенты?</h1>
        <p style={{ fontSize: '1rem', color: 'grey' }}>
          Мы всегда стараемся стать лучше для вас и открыты новому сотрудничеству.
          Не сдерживайте себя - расскажите
        </p>
      </div>
      <div className={styles.group}>
        <div className={styles.row}>
        {
          reviews.length
            ? reviews.map((el) => <ReviewItem key={el.id} item={el}/>)
            : <p>Ошибка отображения информации</p>
        }
        </div>
        <div className={styles.row}>
        {
          reviews.length
            ? reviews.map((el) => <ReviewItem key={el.id} item={el}/>)
            : <p>Ошибка отображения информации</p>
        }
        </div>
      </div>
      <ReviewForm/>
    </section>
  );
}

export default ReviewTicker;
