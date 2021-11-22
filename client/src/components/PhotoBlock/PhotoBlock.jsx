import React, { useState } from 'react';
import PhotoBlockGestZone from '../PhotoBlockGestZone/PhotoBlockGestZone.jsx';
import PhotoBlockUniversal from '../PhotoBlockUniversal/PhotoBlockUniversal.jsx';
import PhotoBlockRestZone from '../PhotoBlockRestZone/PhotoBlockRestZone.jsx';
import styles from './PhotoBlock.module.css';

import imgHostelRooms1 from './imgHostelRooms/image_hostelRooms1.jpeg';
import imgHostelRooms2 from './imgHostelRooms/image_hostelRooms2.jpeg';
import imgHostelRooms3 from './imgHostelRooms/image_hostelRooms3.jpeg';
import imgHostelRooms4 from './imgHostelRooms/image_hostelRooms4.jpeg';
import imgHostelRooms5 from './imgHostelRooms/image_hostelRooms5.jpeg';
import imgHostelRooms6 from './imgHostelRooms/image_hostelRooms6.jpeg';
import imgHostelRooms7 from './imgHostelRooms/image_hostelRooms7.jpeg';

import imgKitchen1 from './imgKitchen/image_kitchen1.jpeg';
import imgKitchen2 from './imgKitchen/image_kitchen2.jpeg';
import imgKitchen3 from './imgKitchen/image_kitchen3.jpeg';
import imgKitchen4 from './imgKitchen/image_kitchen4.jpeg';
import imgKitchen5 from './imgKitchen/image_kitchen5.jpeg';
import imgKitchen6 from './imgKitchen/image_kitchen6.jpeg';
import imgKitchen7 from './imgKitchen/image_kitchen7.jpeg';

// import imgBeach1 from './imgBeach/image_beach1.jpeg';
import imgBeach2 from './imgBeach/image_beach2.jpeg';
import imgBeach3 from './imgBeach/image_beach3.jpeg';
import imgBeach4 from './imgBeach/image_beach4.jpeg';
import imgBeach5 from './imgBeach/image_beach5.jpeg';
import imgBeach6 from './imgBeach/image_beach6.jpeg';
// import imgBeach7 from './imgBeach/image_beach7.jpeg';
import imgBeach9 from './imgBeach/image_beach9.jpeg';
import imgBeach10 from './imgBeach/image_beach10.jpeg';

const photoHostelRooms = {
  img1: imgHostelRooms1,
  img2: imgHostelRooms5,
  img3: imgHostelRooms7,
  img4: imgHostelRooms4,
  img5: imgHostelRooms2,
  img6: imgHostelRooms6,
  img7: imgHostelRooms3,
};
const photoKitten = {
  img1: imgKitchen1,
  img2: imgKitchen2,
  img3: imgKitchen3,
  img4: imgKitchen4,
  img5: imgKitchen5,
  img6: imgKitchen6,
  img7: imgKitchen7,
};

const photoBeach = {
  img1: imgBeach5,
  img2: imgBeach2,
  img3: imgBeach3,
  img4: imgBeach4,
  img5: imgBeach10,
  img6: imgBeach6,
  img7: imgBeach9,
};
function PhotoBlock() {
  const [visibleBlock, setVisibleBlock] = useState('Beach');
  return (
    <div className={styles.photoBlockMain}>
       <div className={styles.photoBlockTitle}>
        <p>Фотографии и настроение</p>
        </div>
        <div className={styles.photoBlockTextBody}>
        <p>Мы создаем для наших гостей атмосферу
         отдыха, <br/> обеспечивая всем необходимым.</p>
        </div>
        <div className={styles.photoBlockButtons}>
          <button onClick={() => setVisibleBlock('GestZone')} className={styles.photoBlockButtonsBig}>
            <p>Гостевая зона</p></button>
          <button onClick={() => setVisibleBlock('HoslelRooms')} className={styles.photoBlockButton}><p>Номера</p></button>
          <button onClick={() => setVisibleBlock('RestZone')} className={styles.photoBlockButtonsBig}><p>Зона отдыха</p></button>
          <button onClick={() => setVisibleBlock('Kitchen')} className={styles.photoBlockButton}><p>Кухня</p></button>
          <button onClick={() => setVisibleBlock('Beach')} className={styles.photoBlockButton}><p>Пляж</p>
          </button>
        </div>
      <div className={styles.photoBlockCardsPhoto}>
        {visibleBlock === 'GestZone' && <PhotoBlockGestZone/>}
        {visibleBlock === 'HoslelRooms' && <PhotoBlockUniversal item={photoHostelRooms}/>}
        {visibleBlock === 'RestZone' && <PhotoBlockRestZone/>}
        {visibleBlock === 'Kitchen' && <PhotoBlockUniversal item={photoKitten}/>}
        {visibleBlock === 'Beach' && <PhotoBlockUniversal item={photoBeach}/>}
      </div>
    </div>
  );
}

export default PhotoBlock;
