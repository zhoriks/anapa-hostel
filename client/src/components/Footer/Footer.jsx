import React from 'react';
import styles from './Footer.module.css';

import vk from './imgFooter/vk.png';
import facebook from './imgFooter/facebook.png';
import instagram from './imgFooter/instagram.png';

function Footer() {
  return (
    <div className={styles.containerMain} id='footer'>
      <div className={styles.containerFooter}>
        <div className={styles.containerContacts}>
          <p className={styles.numberText}><a href="tel:+79999999999">+7 (999) 999-99-99</a></p>
          <p className={styles.titleText}>Мы находимся тут:</p>
          <p className={styles.bodyText}>г. Анапа, ул. Тургенева, 112</p>
        </div>
        <div className={styles.containerNavigation}>
          <nav className={styles.nav}>
            <ul>
              <li><a href="#about">О нас</a></li>
              <li><a href="#rooms">Номера</a></li>
              <li><a href="#gallery">Галерея</a></li>
              <li><a href="#reviewTicker">Отзывы</a></li>
            </ul>
          </nav>
        </div>
        <div className={styles.containerLinks}>
          <p className={styles.titleLink}>Мы в социальных сетях</p>
          <div className={styles.iconsLinks}>
          <a href="https://www.facebook.com/"><img className={styles.imgIcons} src={facebook} alt='facebook'></img></a>
          <a href="https://www.instagram.com/"><img className={styles.imgIcons} src={instagram} alt='instagram'></img></a>
          <a href="https://vk.com/"><img className={styles.imgIcons} src={vk} alt='vk'></img></a>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.rights}>
        <p className={styles.rightsText}>ANAPA GUEST HOUSE. Все права защищены, а как иначе</p>
        <p className={styles.rightsText}>Сайт запустили ребята из Dream Team</p>
      </div>
    </div>
  );
}

export default Footer;
