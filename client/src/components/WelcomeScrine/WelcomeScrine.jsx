import React from 'react';
import BookingWelcomeForm from '../BookingWelcomeForm/BookingWelcomeForm.jsx';

import styles from './WelcomeScrine.module.css';

export default function WelcomeScrine() {
  return (
    <div className={styles.welcomeScrineContainer}>
      <BookingWelcomeForm />
    </div>
  );
}
