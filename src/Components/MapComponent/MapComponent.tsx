import React from 'react'
import style from './MapComponent.module.scss'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

const MapComponent = () => {
  const mapData = {
    center: [47.22695, 39.778896],
    zoom: 17
  }

  const coordinates = [47.22695, 39.778896]
  const width = document.documentElement.clientWidth
  const height = document.documentElement.clientHeight * 0.6

  return (
    <div className={`${style.mapComponent} ${style.margin_top}`}>
      <div className={style.mapComponent__info}>
        <h2>Как нас найти</h2>
        <h4>Ростов-на-Дону, ул. Богданова 84</h4>
        <h4>
          Телефон: <a href="tel:+78142332211">+7(814)-233-22-11</a>
        </h4>
      </div>
      <div className={`${style.line} ${style.margin_bottom}`} />
      <YMaps>
        <Map height={height} width={width} defaultState={mapData}>
          <Placemark geometry={coordinates} />
        </Map>
      </YMaps>
    </div>
  )
}

export default MapComponent
