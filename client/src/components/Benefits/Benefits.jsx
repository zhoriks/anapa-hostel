import styles from './Benefits.module.css';
import OneBenefit from '../OneBenefit/OneBenefit.jsx';

import admin from './img/24.png';
import cleaning from './img/cleaning.png';
import game from './img/game.png';
import label from './img/label.png';
import tea from './img/tea.png';
import wifi from './img/wifi.png';
import lock from './img/lock.png';

function Benefits() {
  const benefitsContentTop = [
    {
      id: 1,
      img: tea,
      description: 'Чай и кофе без ограничений',
    },
    {
      id: 2,
      img: admin,
      description: 'Администратор 24/7',
    },
    {
      id: 3,
      img: cleaning,
      description: 'Ежедневный клининг номеров',
    },
    {
      id: 4,
      img: lock,
      description: 'Охраняемая территория',
    },
    {
      id: 5,
      img: game,
      description: 'Зона отдыха и развлечений',
    },
  ];

  const benefitsContentBottom = [
    {
      id: 1,
      img: wifi,
      description: 'Высокоскоростной интернет',
    },
    {
      id: 2,
      img: label,
      description: 'Расположение рядом с морем',
    },
  ];

  return (
    <>
    <div className={styles.benefitsTitle}>
      <span style={{
        display: 'block', marginLeft: '2px', marginBottom: '0.5%',
      }}>Вне зависимости от выбранного номера</span>
      <h1 className={styles.benefitsTitleBig}>Вы получаете</h1>
    </div>
    <div className={styles.benefitsContainer}>
      <div className={styles.topLine}>
        {
          benefitsContentTop.length
            ? benefitsContentTop.map((el) => <OneBenefit key={el.id} item={el}/>)
            : <p>Ошибка отображения информации</p>
        }
      </div>
      <div className={styles.bottomLine}>
        {
          benefitsContentBottom.length
            ? benefitsContentBottom.map((el) => <OneBenefit key={el.id} item={el}/>)
            : <p>Ошибка отображения информации</p>
        }
      <div className={styles.contactDiv}>
        <div className={styles.contactDivText}>
          <h3>Есть вопросы?</h3>
          <span style={{ display: 'block', margin: '0' }}>Звоните, и мы ответим на них</span>
        </div>
        <div className={styles.contactDivPhone}><a href="tel:+799999999" className={styles.contactDivPhoneNumber}>+7 (999) 999-99-99</a></div>
      </div>
      </div>
    </div>
    </>
  );
}

export default Benefits;
