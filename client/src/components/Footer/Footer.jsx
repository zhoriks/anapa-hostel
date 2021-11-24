import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.containerMain}>
      <div className={styles.containerFooter}>
        <div className={styles.containerContacts}></div>
        <div className={styles.containerNavigation}></div>
        <div className={styles.containerEmail}></div>
      </div>
      <div className={styles.rights}></div>
    </div>
  );
}

export default Footer;
