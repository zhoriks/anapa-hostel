import styles from './ReviewItem.module.css';
// import user from '../data/img/user.png';

function ReviewItem({ item }) {
  return (
    <div className={styles.reviewItemContainer}>
      <span className={styles.reviewDescription}>
        {item.description}
      </span>
      <div className={styles.reviewPerson}>
        <img className={styles.reviewPersonImg} src={item.img} alt="" />
        <div className={styles.reviewPersonData}>
          <span>{item.name}</span><br/>
          <span>{item.occupation}</span>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
