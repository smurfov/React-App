import React from 'react';
import HotelItem from '../components/HotelItem'

class Hotels extends React.Component {
  render() {
    let myMap;

    ymaps.ready(init);

    function init() {
      myMap = new ymaps.Map('map', {
        center: center_map,
        zoom: 14,
        controls: ['routeButtonControl', 'fullscreenControl']
      }, {searchControlProvider: 'yandex#search'});
    }

    return (
      <div className="hotels__content">
        <span className="hotels__content__title">Гостиницы для животных в Москве</span>
        <div className="hotels__content__map" id="map"></div>
        <div className="hotels__content__hotels-list">
          <ul className="hotels__content__hotels-list__list">
            <HotelItem />
          </ul>
        </div>
      </div>
    )
  }
}

export default Hotels

/*
<hotel v-for="(item, index) in hotelList"
:key="index"
:name="item.title"
:address="item.address"
:desc="item.short_description"
:time="item.work_time"
:phone="item.phone"
:item="item"
:metro="item.metro">
</hotel>

<metro v-for="(metro, index) in item.metro"
:key="index"
:name="item.metro[index][0]"
:link="item.metro[index][1]"/>
*/