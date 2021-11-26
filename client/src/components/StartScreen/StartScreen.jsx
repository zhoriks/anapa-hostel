import React from 'react';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen.jsx';
import PhotoSlider from '../PhotoSlider/PhotoSlider.jsx';

import styles from './StartScreen.module.css';
import MapYandex from '../MapYandex/MapYandex.jsx';
import mainSliderImages from '../data/helpData/mainSlider';
import mainSliderSettings from '../data/helpData/mainSliderSettings';

export default function StartScreen() {
  return (
    <div className={styles.startContainer}>
      <div className={styles.startLeftContainer}><WelcomeScreen /></div>

      <div className={styles.startRightContainer}>
        <div className={styles.sliderContainer}>
          <PhotoSlider images={mainSliderImages} settings={mainSliderSettings} />
        </div>
        <MapYandex />
      </div>
    </div>
  );
}
