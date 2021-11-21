import React from 'react';
import styles from './PhotoBlockUniversal.module.css';

function PhotoBlockUniversal() {
  return (
    <div className={styles.photoBlockRestZone}>

      <div className={styles.UniversalUpperBlock}>

          <div className={styles.UniversalUpperPhoto}></div>
          <div className={styles.UniversalUpperPhoto}></div>
          <div className={styles.UniversalUpperPhoto}></div>

      </div>

      <div className={styles.UniversalLowerBlock}>

          <div className={styles.UniversalLowerPhoto}></div>
          <div className={styles.UniversalLowerPhoto}></div>
          <div className={styles.UniversalLowerPhoto}></div>
          <div className={styles.UniversalLowerPhoto}></div>

      </div>

    </div>
  );
}

export default PhotoBlockUniversal;
