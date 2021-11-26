import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import styles from './MapYandex.module.css';

export default function MapYandex() {
  const mapData = {
    center: [44.88930040823357, 37.31494665078738],
    zoom: 14,
  };

  const coordinates = [
    [44.88868644843722, 37.31441020898438],
  ];

  return (
    <div className={styles.mapContainer} id="map" >
      <YMaps>
        <Map defaultState={mapData} width={'100%'} height={'100%'}>
          {coordinates.map((coordinate, index) => <Placemark key={index} geometry={coordinate} />)}
        </Map>
      </YMaps>
    </div >
  );
}
