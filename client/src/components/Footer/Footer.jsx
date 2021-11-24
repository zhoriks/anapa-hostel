import React from 'react';
import styles from './Footer.module.css';

import vk from './imgFooter/vk.png';
import facebook from './imgFooter/facebook.png';
import instagram from './imgFooter/instagram.png';

function Footer() {
  return (
    <div className={styles.containerMain}>
      <div className={styles.containerFooter}>
        <div className={styles.containerContacts}>
          <p className={styles.numberText}><a href="tel:+79999999999">+7 (999) 999-99-99</a></p>
          <p className={styles.titleText}>Мы находимся тут:</p>
          <p className={styles.bodyText}>ул. Александра-Невского 9В</p>
        </div>
        <div className={styles.containerNavigation}>
          <nav className={styles.nav}>
            <ul>
              <li><a href="#1">О нас</a></li>
              <li><a href="#1">Номера</a></li>
              <li><a href="#1">Галерея</a></li>
              <li><a href="#1">Отзывы</a></li>
            </ul>
          </nav>
        </div>
        <div className={styles.containerLinks}>
          <p className={styles.titleLink}>Мы в социальных сетях</p>
          <div className={styles.iconsLinks}>
            <img className={styles.imgIcons} src={facebook} alt='facebook'></img>
            <img className={styles.imgIcons} src={instagram} alt='instagram'></img>
            <img className={styles.imgIcons} src={vk} alt='vk'></img>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.rights}>
        <p className={styles.rightsText}>ANAPA GUEST-HOUSE. Все права защищены, а как иначе</p>
        <p className={styles.rightsText}>Сайт запустили ребята из Elbrus Coding Bootcamp</p>
      </div>
    </div>
  );
}

export default Footer;
