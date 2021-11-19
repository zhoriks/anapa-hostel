import styles from './WhyWe.module.css';
import success from '../data/img/success.png';

function WhyWe() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h2 className={styles.leftSideTitle}>Почему нас выбирают?</h2>
        <span className={styles.leftSideDescription}>
          Lorem  ipsum dolor sit amet, consectetur adipiscing elit sed,
          sed do eiusmod tempor incididunt ut lab
        </span>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.rightSideItem}>
          <img src={success} className={styles.rightSideItemImg} alt="" />
          <div className={styles.rightSideItemDiv}>
            <h4 className={styles.rightSideItemDivTitle}>Lorem ipsum</h4>
            <span className={styles.rightSideItemDivDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </span>
          </div>
        </div>
        <div className={styles.rightSideItem}>
          <img src={success} className={styles.rightSideItemImg} alt="" />
          <div className={styles.rightSideItemDiv}>
            <h4 className={styles.rightSideItemDivTitle}>Lorem ipsum</h4>
            <span className={styles.rightSideItemDivDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </span>
          </div>
        </div>
        <div className={styles.rightSideItem}>
          <img src={success} className={styles.rightSideItemImg} alt="" />
          <div className={styles.rightSideItemDiv}>
            <h4 className={styles.rightSideItemDivTitle}>Lorem ipsum</h4>
            <span className={styles.rightSideItemDivDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </span>
          </div>
        </div>
        <div className={styles.rightSideItem}>
          <img src={success} className={styles.rightSideItemImg} alt="" />
          <div className={styles.rightSideItemDiv}>
            <h4 className={styles.rightSideItemDivTitle}>Lorem ipsum</h4>
            <span className={styles.rightSideItemDivDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyWe;
