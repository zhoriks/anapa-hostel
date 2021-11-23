import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './LowerBlockWithStock.module.css';
import imgLeft from './imgLowerBlock/angelina_jolie.png';
import MapYandexLower from '../MapYandexLower/MapYandexLover.jsx';

function LowerBlockWithStock() {
  return (
    <>
    <div className={styles.mainBlock}>
      <div className={styles.leftBlock}>
          <ScrollAnimation animateIn='animate__slideInLeft' duration='5'>
          <img className={`${styles.imgasLeft}`} src={imgLeft} alt="bow"></img>
          </ScrollAnimation>
      </div>
      <div className={styles.stockBlock}>
      <p className={styles.title}>Получи что-то там <br/> за что-то там</p>
      <p className={styles.bodyText}>Важные условия получения <br/> какой-то скидки</p>
      <button className={styles.button}><p className={styles.buttonText}>Хочу скидку</p></button>
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
