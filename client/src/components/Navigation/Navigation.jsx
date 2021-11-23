import { useState } from 'react';
import styles from './Navigation.module.css';
// import phone from './img/phone.gif';
// import phoneStatic from './img/phoneStatic.png';
import telegram from './img/telegram.png';
import whatsapp from './img/whatsapp.png';
import logo from './img/logo.png';
import arrow from './img/arrow.png';

function Navigation() {
  const [hidden, setHidden] = useState(true);
  // eslint-disable-next-line consistent-return
  const handelClick = () => setHidden(!hidden);
  return (
    <div className={styles.navigationBlock}>
      <div className={styles.logo}><div className={styles.logo} style={{ backgroundImage: `url(${logo})` }}></div></div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#1">О нас</a></li>
          <li><a href="#1">Номера</a></li>
          <li><a href="#1">Галерея</a></li>
          <li><a href="#1">Контакты</a></li>
        </ul>
      </nav>
      <div className={styles.MessengersNumber}>
        <div className={styles.Messengers}>
          <img className={`${styles.icons}, ${hidden ? styles.iconsHidden : styles.iconsHiddenOn}`} id='telegram' src={telegram} alt='TG'></img>
          <img className={`${styles.icons}, ${hidden ? styles.iconsHidden : styles.iconsHiddenOn}`} id='whatsapp' src={whatsapp} alt='WA'></img>
          <div className={styles.phoneBlock}>
            <img onClick={handelClick} className={`${hidden ? styles.arrow : styles.arrowClick}`} id='arrow' src={arrow} alt='AR'></img>
            <div onClick={handelClick} className={styles.phone} id='phone' alt='PH'></div>
          </div>
        </div>
        <p><a className={styles.numberText} href="tel:+79999999999">+7 (999) 999-99-99</a></p>
      </div>
    </div>
  );
}

export default Navigation;
