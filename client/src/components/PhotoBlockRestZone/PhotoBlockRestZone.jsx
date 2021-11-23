import React from 'react';
import styles from './PhotoBlockRestZone.module.css';
import imgRestZone1 from './imgRestZone/image_restZone1.jpeg';
import imgRestZone2 from './imgRestZone/image_restZone2.jpeg';
import imgRestZone3 from './imgRestZone/image_restZone3.jpeg';
import imgRestZone4 from './imgRestZone/image_restZone4.jpeg';

function PhotoBlockRestZone() {
  return (
    <div className={styles.photoBlockRestZone}>

      <div className={styles.RestZoneLeftBlock}>

          <div className={styles.RestZoneLeftBlockUpperPhoto} style={{ backgroundImage: `url(${imgRestZone1})` }}></div>

          <div className={styles.RestZoneLeftBlockLower}>

            <div className={styles.LeftBlockLowerLeftPhoto} style={{ backgroundImage: `url(${imgRestZone2})` }}></div>
            <div className={styles.LeftBlockLowerRightPhoto} style={{ backgroundImage: `url(${imgRestZone3})` }}></div>

          </div>

      </div>

      <div className={styles.RestZoneRightPhoto} style={{ backgroundImage: `url(${imgRestZone4})` }}></div>

    </div>
  );
}

export default PhotoBlockRestZone;
