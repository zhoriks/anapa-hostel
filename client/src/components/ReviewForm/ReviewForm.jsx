import NumberFormat from 'react-number-format';
import Popup from 'reactjs-popup';
import styles from './ReviewForm.module.css';
import 'reactjs-popup/dist/index.css';

function ReviewForm() {
  return (

    <Popup
    trigger={<button className={styles.reviewButton}> Оставить отзыв </button>}
    modal
    nested
  >
    {(close) => (
      <>
      <div className={styles.imageDiv}></div>
      <div className={styles.modal}>
        <button className={styles.close} onClick={close}>
          &times;
        </button>
        <div className={styles.header}> Оставьте отзыв о нашей работе </div>
        <div className={styles.content}>
          <p>Расскажите о своих впечатлениях, нам важна обратная связь</p>
        </div>
        <form name="reviewForm" className={styles.reviewForm} action="" method="">
          <input type="text" name="name" className={styles.reviewFormName} id="" placeholder='Ваше имя'/>
          <NumberFormat name="phone" className={styles.reviewFormPhone} format="+7 (###) ###-####" mask="_" type="tel" placeholder='+ 7 (___) ___-____' />
          <textarea name="" className={styles.reviewFormTextArea} cols="30" rows="2" placeholder="Ваш отзыв"></textarea>
        </form>
        <div className={styles.actions}>
          <button
            className={styles.button}
            onClick={() => {
              close();
            }}
          >
            Отправить
          </button>
        </div>
      </div>
      </>
    )}
  </Popup>

  );
}

export default ReviewForm;
