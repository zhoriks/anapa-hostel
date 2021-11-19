import React from 'react';
import 'animate.css';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

import BookingWelcomeForm from '../BookingWelcomeForm/BookingWelcomeForm.jsx';

import styles from './WelcomeScreen.module.css';

export default function WelcomeScreen() {
  return (
    <div className={styles.welcomeScreenContainer}>

      {/* блок с описанием отеля  */}
      <div className={styles.nameBlock}>
        <div className={styles.containerNameBlock}>
          {/* попытка сделать этот блок анимированным с помощью сторонней библиотеки
          react-animate-on-scroll и animate.css */}
          <ScrollAnimation animateIn='animate__rotateOutUpLeft'
            animateOut='animate__rotateInDownLeft'
            duration={3} initiallyVisible={true} animateOnce={false}>
            <img src="https://static.tildacdn.com/tild3865-3761-4365-b163-656664386539/Rectangle_86.svg"
              alt="block" />
            <div className={styles.textNameBlock}>
              <h2>Мини-отель на берегу черного моря</h2>
              <p>То самое место, которое станет для вас самым любимым</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* блок со предложением скидки */}
      <div className={styles.offerDiscount}>
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/0e/ef/13/95/utesov-hotel.jpg" alt="" />
        <h3>Дарим скидку 10%</h3>
        <p>в честь открытия</p>
      </div>

      {/* вставка элемента формы */}
      <BookingWelcomeForm />
    </div >
  );
}
