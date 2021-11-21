import React from 'react';
import styles from './PhotoBlockRestZone.module.css';

function PhotoBlockRestZone() {
  return (
    <div className={styles.photoBlockRestZone}>

      <div className={styles.RestZoneLeftBlock}>

          <div className={styles.RestZoneLeftBlockUpperPhoto}></div>

          <div className={styles.RestZoneLeftBlockLower}>

            <div className={styles.LeftBlockLowerLeftPhoto}></div>
            <div className={styles.LeftBlockLowerRightPhoto}></div>

          </div>

      </div>

      <div className={styles.RestZoneRightPhoto}></div>

    </div>
  );
}

export default PhotoBlockRestZone;
