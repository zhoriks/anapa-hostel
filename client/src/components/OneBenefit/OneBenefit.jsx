import styles from './OneBenefit.module.css';

function OneBenefit({ item }) {
  return (
    <div className={styles.benefit}>
      <img src={item.img} className={styles.benefitImg} alt="" />
      <span className={styles.benefitDescription}>{item.description}</span>
    </div>
  );
}

export default OneBenefit;
