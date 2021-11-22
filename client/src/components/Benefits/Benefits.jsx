import styles from './Benefits.module.css';
import OneBenefit from '../OneBenefit/OneBenefit.jsx';
import success from './img/success.png';

function Benefits() {
  const benefitsContentTop = [
    {
      id: 1,
      img: success,
      description: 'Чай и кофе без ограничений',
    },
    {
      id: 2,
      img: success,
      description: 'Доступность администратора 24/7',
    },
    {
      id: 3,
      img: success,
      description: 'Ежедневный клининг номеров',
    },
    {
      id: 4,
      img: success,
      description: 'Охраняемая территория',
    },
    {
      id: 5,
      img: success,
      description: 'Зона отдыха и развлечений',
    },
  ];

  const benefitsContentBottom = [
    {
      id: 1,
      img: success,
      description: 'Высокоскоростной интернет',
    },
    {
      id: 2,
      img: success,
      description: 'Расположение рядом с морем',
    },
  ];

  return (
    <>
    <div className={styles.benefitsTitle}>
      <span style={{
        display: 'block', marginLeft: '2px', marginBottom: '1%', color: 'grey', fontSize: '1rem',
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
          <span style={{ display: 'block', margin: '0', color: 'grey' }}>Звоните, и мы ответим на них</span>
        </div>
        <div className={styles.contactDivPhone}><a href="tel:+799999999" className={styles.contactDivPhoneNumber}>+7 (999) 999-99-99</a></div>
      </div>
      </div>
    </div>
    </>
  );
}

export default Benefits;
