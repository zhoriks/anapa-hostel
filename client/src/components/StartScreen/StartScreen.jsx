import React from 'react';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen.jsx';

import styles from './StartScreen.module.css';

export default function StartScreen() {
  return (
    <div className={styles.startContainer}>
      <div className={styles.startLeftContainer}><WelcomeScreen /></div>
      <div className={styles.startRightContainer}>
        <div className={styles.blay}>pizdec</div>
      </div>
    </div>
  );
}
