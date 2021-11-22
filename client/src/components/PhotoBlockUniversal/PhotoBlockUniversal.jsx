import React from 'react';

import styles from './PhotoBlockUniversal.module.css';

function PhotoBlockUniversal({ item }) {
  return (
    <div className={styles.photoBlockRestZone}>

      <div className={styles.UniversalUpperBlock}>

          <div className={styles.UniversalUpperPhoto} style={{ backgroundImage: `url(${item.img1}) ` }}></div>
          <div className={styles.UniversalUpperPhoto} style={{ backgroundImage: `url(${item.img2}) ` }}></div>
          <div className={styles.UniversalUpperPhoto} style={{ backgroundImage: `url(${item.img3}) ` }}></div>

      </div>

      <div className={styles.UniversalLowerBlock}>

          <div className={styles.UniversalLowerPhoto} style={{ backgroundImage: `url(${item.img4}) ` }}></div>
          <div className={styles.UniversalLowerPhoto} style={{ backgroundImage: `url(${item.img5}) ` }}></div>
          <div className={styles.UniversalLowerPhoto} style={{ backgroundImage: `url(${item.img6}) ` }}></div>
          <div className={styles.UniversalLowerPhoto} style={{ backgroundImage: `url(${item.img7}) ` }}></div>

      </div>

    </div>
  );
}

export default PhotoBlockUniversal;
