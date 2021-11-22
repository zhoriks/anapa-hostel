import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './PhotoSlider.module.css';

export default function PhotoSlider() {
  const images = [
    { src: 'https://n1s1.elle.ru/35/b8/55/35b8559602ac5d8c6bc92edc1b3e0258/400x266_1_8b9c2d37da8264afdde48005d01561a8@940x626_0xc35dbb80_1647494901513177195.jpeg' },
    { src: 'https://hotels.sletat.ru/i/f/104248_4.jpg' },
    { src: 'https://avatars.mds.yandex.net/get-zen_doc/4453741/pub_60b9e1bf61893124cb2ff993_60b9e794931ee526e130c8f7/scale_1200' },
    { src: 'https://s3.yugopolis.ru/media/data/img/e598bdb4003718e46d9dc3cf7d27acb2/245990.jpg' },
    { src: 'https://vashotel-a.akamaihd.net/0000000278097108/0c193ffa1f67f0ed1654ef1da9213aef.jpg' },
    { src: 'https://www.multitour.ru/files/imgs/15980e8de784a80b495f96a91e6584a4662ad102.jpeg' },
  ];

  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    focusOnSelect: true,
    autoplaySpeed: 3000,
    // тут нужно будет прописать код этих точек в css
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} >
            <img src={img.src} alt='hotel' />
          </div>
        ))}
      </Slider>
    </div>
  );
}
