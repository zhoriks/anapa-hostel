import { useState } from 'react';
import styles from './Navigation.module.css';
import phone from './img/phone.gif';
import telegram from './img/telegram.png';
import whatsapp from './img/whatsapp.png';

// поле body с текстом статьи для JSON Placeholder

function Navigation() {
  const [hidden, setHidden] = useState(true);
  // eslint-disable-next-line consistent-return
  const handelClick = () => setHidden(!hidden);
  return (
      <div className={styles.navigationBlock}>
        <div className={styles.logo}><p>LOGO</p></div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#1">О нас</a></li>
            <li><a href="#1">Номера</a></li>
            <li><a href="#1">Галерея</a></li>
            <li><a href="#1">Контакты</a></li>
          </ul>
        </nav>
        <div className={styles.Messengers}>
          <img className={`${styles.icons}, ${hidden ? styles.iconsHidden : styles.iconsHiddenOn}`} id='telegram' src={telegram} alt='TG'></img>
          <img className={`${styles.icons}, ${hidden ? styles.iconsHidden : styles.iconsHiddenOn}`} id='whatsapp' src={whatsapp} alt='WA'></img>
          <img onClick={handelClick} className={styles.icons} id='phone' src={phone} alt='PH'></img>
        </div>
        <p className={styles.numberText}>8 (999) 999-99-99</p>
      </div>
  );
}

export default Navigation;
