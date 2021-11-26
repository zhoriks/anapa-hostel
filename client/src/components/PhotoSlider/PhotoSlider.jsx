import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './PhotoSlider.module.css';

export default function PhotoSlider({ images, settings }) {
  return (
    // <div className={styles.sliderContainer}>
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index} >
          <img src={img.src} alt='hotel' />
        </div>
      ))}
    </Slider>
    // </div >
  );
}
