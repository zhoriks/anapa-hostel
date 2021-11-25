import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import styles from './MapYandexLower.module.css';

export default function MapYandexLower() {
  const mapData = {
    center: [44.89091166, 37.31396083],
    zoom: 10,
  };

  const coordinates = [
    [44.89091166, 37.31396083],
    // [57.684758, 39.738521],
  ];

  return (
    <div className={styles.mapContainer} id="map" >
      <YMaps>
        <Map defaultState={mapData} width={'100%'} height={'100%'}>
          {coordinates.map((coordinate, i) => <Placemark key={i} geometry={coordinate} />)}
        </Map>
      </YMaps>
    </div >
  );
}

// eslint-disable-next-line no-lone-blocks
{ /* <img src="https://anapatoday.com/f/2016/03/29/1603290024od.jpg" alt="map" /> */ }
