import React from 'react';
import { BiRuble } from 'react-icons/bi';
import styles from './HostelRoom.module.css';

function HostelRoom({ item }) {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${item.img})` }}>
      <div className={styles.nestedContainer}>
        <div className={styles.textContainer}>
          <p className={styles.textContainerHeader}>{item.titleText}</p>
          <p className={styles.textContainerBody}>{item.bodyText}</p>
        </div>
        <div className={styles.buttonContainer}>
          <p className={styles.textContainerPrice}>{item.price}  <BiRuble/></p>
          <button className={styles.buttonHostelRoom}>Выбрать</button>
        </div>
      </div>
    </div>
  );
}
export default HostelRoom;
