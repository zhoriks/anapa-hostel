import React from 'react';
import styles from './PhotoBlockGestZone.module.css';

function PhotoBlockGestZone() {
  return (
    <div className={styles.photoBlockGestZone}>

      <div className={styles.GestZoneLeftPhoto}></div>

      <div className={styles.GestZoneRightPhoto}></div>

    </div>
  );
}

export default PhotoBlockGestZone;
