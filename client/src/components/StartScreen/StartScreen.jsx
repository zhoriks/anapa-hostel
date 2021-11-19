import React from 'react';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen.jsx';
import PhotoSlider from '../PhotoSlider/PhotoSlider.jsx';

import styles from './StartScreen.module.css';
import Map from '../Map/Map.jsx';

export default function StartScreen() {
  return (
    <div className={styles.startContainer}>
      <div className={styles.startLeftContainer}><WelcomeScreen /></div>

      <div className={styles.startRightContainer}>
        <PhotoSlider />
        <Map />
      </div>
    </div>
  );
}
