import React from 'react';
// import NumberFormat from 'react-number-format';
import Popup from 'reactjs-popup';
import styles from './HostelRoom.module.css';
import 'reactjs-popup/dist/index.css';
import HostelRoomPhotoSlider from '../HostelRoomPhotoSlider/HostelRoomPhotoSlider.jsx';

function HostelRoom({ item }) {
  return (
    <>
      <div className={styles.containerMain}>
        <div className={styles.container} style={{ backgroundImage: `url(${item.img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        </div>
        <div className={styles.nestedContainer}>
          <p className={styles.textContainerTitle}>{item.titleText}</p>

          <Popup
            trigger={<button className={styles.buttonHostelRoom}>Подробнее</button>}
            modal
            nested
          >
            {(close) => (
              <div className={styles.modalMain}>
                {/* <div className={styles.imageDiv}></div> */}
                <div className={styles.modal}>
                  <button className={styles.close} onClick={close}>
                    &times;
                  </button>
                  <div className={styles.sliderContainer}>
                    <HostelRoomPhotoSlider item={item}/>
                  </div>
                  <div className={styles.header}>
                  <p className={styles.titleModal}>{item.titleText} </p>
                  </div>
                  <div className={styles.contentMain}>
                    <div className={styles.content}>
                      <div className={styles.oneCriterion}>
                        <img className={styles.iconOne} alt="1" src="https://static.tildacdn.com/tild3139-6536-4262-b935-623739313163/selection.svg"></img>
                        <p>Площадь: {item.square} м2</p>
                      </div>
                      <div className={styles.oneCriterion}>
                        <img className={styles.iconOne} alt="1" src="https://static.tildacdn.com/tild6630-3233-4064-a138-373864633963/user_3.svg"></img>
                        <p>Кол-во мест: {item.places} человека</p>
                      </div>
                      <div className={styles.oneCriterion}>
                        <img className={styles.iconOne} alt="1" src="https://static.tildacdn.com/tild3834-6661-4461-b563-646466396464/bed.svg"></img>
                        <p>{item.bed}</p>
                      </div>
                    </div>
                    <div className={styles.content}>
                      <div className={styles.oneCriterion}>
                        <img className={styles.iconOne} alt="1" src="https://static.tildacdn.com/tild3037-3166-4662-a234-626263653937/wifi.svg"></img>
                        <p>Бесплатный Wi-Fi</p>
                      </div>
                      <div className={styles.oneCriterion}>
                        <img className={styles.iconOne} alt="1" src="https://static.tildacdn.com/tild6435-3633-4565-b661-393835636664/bath.svg"></img>
                        <p>Собственная ванная</p>
                      </div>
                      <div className={styles.oneCriterion}>
                        <img className={styles.iconOne} alt="1" src="https://static.tildacdn.com/tild3139-3066-4465-a536-346663663535/kitchen.svg"></img>
                        <p>Мини-кухня</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    </>
  );
}

export default HostelRoom;
