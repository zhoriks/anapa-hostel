import React from 'react';
import PhotoBlockGestZone from '../PhotoBlockGestZone/PhotoBlockGestZone.jsx';
// import PhotoBlockRestZone from '../PhotoBlockRestZone/PhotoBlockRestZone.jsx';
import styles from './PhotoBlock.module.css';

function PhotoBlock() {
  return (
    <div className={styles.photoBlockMain}>
       <div className={styles.photoBlockTitle}>
        <p>Интерьер и вайб</p>
        </div>
        <div className={styles.photoBlockTextBody}>
        <p>Мы создаем для наших резидентов атмосферу
         драйва и продуктивности, <br/> обеспечиваем всем необходимым для этого.</p>
        </div>
        <div className={styles.photoBlockButtons}>
          <button className={styles.photoBlockButtonsBig}><p>Гостевая зона</p></button>
          <button className={styles.photoBlockButton}><p>Номера</p></button>
          <button className={styles.photoBlockButtonsBig}><p>Зона отдых</p></button>
          <button className={styles.photoBlockButton}><p>Кухня</p></button>
          <button className={styles.photoBlockButton}><p>Пляж</p>
          </button>
        </div>
      <div className={styles.photoBlockCardsPhoto}>
        <PhotoBlockGestZone/>
      </div>
    </div>
  );
}

export default PhotoBlock;
