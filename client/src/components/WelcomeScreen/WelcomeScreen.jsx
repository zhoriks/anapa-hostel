import React from 'react';
import 'animate.css';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

import BookingWelcomeForm from '../BookingWelcomeForm/BookingWelcomeForm.jsx';

import styles from './WelcomeScreen.module.css';

export default function WelcomeScreen() {
  return (
    <div className={styles.welcomeScreenContainer}>
      <div className={styles.nameBlock}>
        <ScrollAnimation animateIn='animate__rotateOutUpLeft'
          animateOut='animate__rotateInDownLeft'
          duration={3} initiallyVisible={true} animateOnce={false}>
          <img src="https://static.tildacdn.com/tild3865-3761-4365-b163-656664386539/Rectangle_86.svg"
            alt="block" />
        </ScrollAnimation>
      </div>

      <BookingWelcomeForm />
    </div >
  );
}
