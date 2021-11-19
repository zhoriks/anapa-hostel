import styles from './Ticker.module.css';

// Компонент, отвечающий за бегущую строку

function Ticker() {
  return (
    <section>
      <div className={styles.group}>
        <div class={styles.row}>
          <span>Море, горы, свежий воздух</span>
          <span>Бархатный песок</span>
          <span>Приезжайте к нам в Анапу</span>
          <span>У нас тут хорошо</span>
          <span>Море, горы, свежий воздух</span>
          <span>Бархатный песок</span>
          <span>Приезжайте к нам в Анапу</span>
          <span>У нас тут хорошо</span>
        </div>
      </div>
    </section>
  );
}

export default Ticker;
