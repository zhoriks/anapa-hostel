import styles from './WhyWeItem.module.css';

function WhyWeItem({ item }) {
  return (
    <div className={styles.rightSideItem}>
          <img src={item.img} className={styles.rightSideItemImg} alt="" />
          <div className={styles.rightSideItemDiv}>
            <h4 className={styles.rightSideItemDivTitle}>{item.title}</h4>
            <span className={styles.rightSideItemDivDescription}>
              {item.description}
            </span>
          </div>
        </div>
  );
}

export default WhyWeItem;
