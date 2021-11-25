import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './LowerBlockWithStock.module.css';
// import imgLeft from './imgLowerBlock/angelina_jolie.png';
import imgLeft from './imgLowerBlock/olegOnUnicorn.PNG';
import MapYandexLower from '../MapYandexLower/MapYandexLover.jsx';

function LowerBlockWithStock() {
  return (
    <>
      <div className={styles.mainBlock}>
        <div className={styles.leftBlock}>
          <ScrollAnimation animateIn='animate__slideInLeft' duration={5}>
            <img className={`${styles.imgasLeft}`} src={imgLeft} alt="bow"></img>
          </ScrollAnimation>
        </div>
        <div className={styles.stockBlock}>
          <p className={styles.title}>Живи дольше</p>
          <p className={styles.titleText}>плати меньше</p>
          <p className={styles.titleProcent}>-15%</p>
          <p className={styles.bodyText}>Скидка на бронирования от 3 ночей</p>
          <button className={styles.button}>
            <p className={styles.buttonText}>Хочу скидку</p>
          </button>
        </div>
        <div className={styles.mapBlock}>
          <MapYandexLower className={styles.mapYandex} />
        </div>
        <div className={styles.rightBlock}></div>
      </div>
    </>
  );
}

export default LowerBlockWithStock;
