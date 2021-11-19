import styles from './Benefits.module.css';
import OneBenefit from '../OneBenefit/OneBenefit.jsx';

function Benefits() {
  return (
    <>
    <div className={styles.benefitsTitle}>
      <span style={{
        display: 'block', marginLeft: '2px', marginBottom: '1%', color: 'grey',
      }}>Вне зависимости от выбранного номера</span>
      <h1>Вы получаете</h1>
    </div>
    <div className={styles.benefitsContainer}>
      <div className={styles.topLine}>
        <OneBenefit />
        <OneBenefit />
        <OneBenefit />
        <OneBenefit />
        <OneBenefit />
      </div>
      <div className={styles.bottomLine}>
      <OneBenefit />
      <OneBenefit />
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
