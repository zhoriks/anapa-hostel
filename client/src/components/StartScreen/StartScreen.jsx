import React from 'react';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen.jsx';
import PhotoSlider from '../PhotoSlider/PhotoSlider.jsx';

import styles from './StartScreen.module.css';
import MapYandex from '../MapYandex/MapYandex.jsx';
import mainSliderImages from '../data/helpData/mainSlider';

export default function StartScreen() {
  return (
    <div className={styles.startContainer}>
      <div className={styles.startLeftContainer}><WelcomeScreen /></div>

      <div className={styles.startRightContainer}>
        <PhotoSlider images={mainSliderImages} />
        <MapYandex />
      </div>
    </div>
  );
}
