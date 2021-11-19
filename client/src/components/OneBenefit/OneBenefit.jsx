import styles from './OneBenefit.module.css';
import success from '../data/img/success.png';

function OneBenefit() {
  return (
    <div className={styles.benefit}>
      <img src={success} className={styles.benefitImg} alt="" />
      <span className={styles.benefitDescription}>Lorem ipsum dolor sit amet</span>
    </div>
  );
}

export default OneBenefit;
