import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Navigation.module.css';
// import phone from './img/phone.gif';
// import phoneStatic from './img/phoneStatic.png';
import telegram from './img/telegram.png';
import whatsapp from './img/whatsapp.png';
import logo from './img/logo.png';
import arrow from './img/arrow.png';

function Navigation() {
  const [hidden, setHidden] = useState(true);
  const history = useHistory();
  // eslint-disable-next-line consistent-return
  const handelClick = () => setHidden(!hidden);

  return (
    <>
    <div className={styles.navigationBlock}>
      <div className={styles.logo}><div className={styles.logo} style={{ backgroundImage: `url(${logo})` }} onClick={() => history.push('/')}></div></div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#about">О нас</a></li>
          <li><a href="#rooms">Номера</a></li>
          <li><a href="#gallery">Галерея</a></li>
          <li><a href="#1">Контакты</a></li>
        </ul>
      </nav>
      <div className={styles.MessengersNumber}>
        <div className={styles.Messengers}>
          <a href="https://t-do.ru/al_gaev"><img className={`${styles.icons}, ${hidden ? styles.iconsHidden : styles.iconsHiddenOn}`} id='telegram' src={telegram} alt='TG'></img></a>
          <a href="https://wapp.click/79999999999"><img className={`${styles.icons}, ${hidden ? styles.iconsHidden : styles.iconsHiddenOn}`} id='whatsapp' src={whatsapp} alt='WA'></img></a>
          <div className={styles.phoneBlock}>
            <img onClick={handelClick} className={`${hidden ? styles.arrow : styles.arrowClick}`} id='arrow' src={arrow} alt='AR'></img>
            <div onClick={handelClick} className={styles.phone} id='phone' alt='PH'></div>
          </div>
        </div>
        <p className={styles.numberText}><a href="tel:+79999999999">+7 (999) 999-99-99</a></p>
      </div>
    </div>
    </>
  );
}

export default Navigation;
