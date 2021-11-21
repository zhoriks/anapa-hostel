import React from 'react';
import styles from './PhotoBlockGestZone.module.css';
import imgGestZone1 from './imgGestZone/image_gestZone1.jpeg';
import imgGestZone2 from './imgGestZone/image_gestZone2.jpeg';

function PhotoBlockGestZone() {
  return (
    <div className={styles.photoBlockGestZone}>

      <div className={styles.GestZoneLeftPhoto} style={{ backgroundImage: `url(${imgGestZone1}) ` }}></div>

      <div className={styles.GestZoneRightPhoto} style={{ backgroundImage: `url(${imgGestZone2})` }}></div>

    </div>
  );
}

export default PhotoBlockGestZone;
