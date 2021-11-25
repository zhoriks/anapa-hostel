import styles from './WhyWe.module.css';
import WhyWeItem from '../WhyWeItem/WhyWeItem.jsx';

import dream from './imgWhyWe/dream.png';
import sea from './imgWhyWe/sea.png';
import money from './imgWhyWe/money.png';
import nature from './imgWhyWe/nature.png';

function WhyWe() {
  const whyWeContent = [
    {
      id: 1,
      img: money,
      title: 'Доступная цена',
      description: 'Заботимся о Вашем бюджете',
    },
    {
      id: 2,
      img: dream,
      title: 'Комфортные номера',
      description: 'Есть все необходимое для проживания',
    },
    {
      id: 3,
      img: sea,
      title: 'Рядом море',
      description: 'До моря рукой подать',
    },
    {
      id: 4,
      img: nature,
      title: 'Природа',
      description: 'Море, горы, свежий воздух',
    },
  ];

  return (
    <div className={styles.container} id="about">
      <div className={styles.leftSide}>
        <h2 className={styles.leftSideTitle}>Почему нас выбирают?</h2>
        <span className={styles.leftSideDescription}>
         ANAPA GUEST HOUSE — мини-отель, расположенный в живописном районе Анапы
         в шаговой доступности от моря и основных достопримечательностей города.
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
