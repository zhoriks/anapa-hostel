import styles from './WhyWe.module.css';
import success from '../data/img/success.png';
import WhyWeItem from '../WhyWeItem/WhyWeItem.jsx';

function WhyWe() {
  const whyWeContent = [
    {
      id: 1,
      img: success,
      title: 'Первое',
      description: 'Первое описание почему',
    },
    {
      id: 2,
      img: success,
      title: 'Второе',
      description: 'Второе описание почему',
    },
    {
      id: 3,
      img: success,
      title: 'Третье',
      description: 'Третье описание почему',
    },
    {
      id: 4,
      img: success,
      title: 'Четвертое',
      description: 'Четвертое описание почему',
    },
  ];

  return (
    <div className={styles.container} id="about">
      <div className={styles.leftSide}>
        <h2 className={styles.leftSideTitle}>Почему нас выбирают?</h2>
        <span className={styles.leftSideDescription}>
          Море, горы, свежий воздух, бархатный песок.
          Приезжайте к нам Анапу, у нас тут хорошо!
        </span>
      </div>
      <div className={styles.rightSide}>
        {
          whyWeContent.length
            ? whyWeContent.map((el) => <WhyWeItem key={el.id} item={el} />)
            : <p>Ошибка отображения информации</p>
        }
      </div>
    </div>
  );
}

export default WhyWe;
