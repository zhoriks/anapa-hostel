import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import styles from './MapYandexLower.module.css';

export default function MapYandexLower() {
  const mapData = {
    center: [44.89091166, 37.31396083],
    zoom: 14,
  };

  const coordinates = [
    [44.88868644843722, 37.31441020898438],
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
