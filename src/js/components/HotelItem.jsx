import React from 'react';

class HotelItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelItems: []
    }
  }

  componentDidMount() {
    fetch('https://sasha20044002.github.io/hotek/hote-list.json')
      .then(res => res.json())
      .then(result => {
        this.setState({hotelItems: result})
      }, error => {
        console.log(error)
      })
  }

  render() {
    const {hotelItems} = this.state

    return (hotelItems.map((item) => <li key={item.title} className="hotels__content__hotels-list__item">
      <div className="hotels__content__hotels-list__content">
        <span className="hotels__content__hotels-list__content__title">{item.title}</span>
        <div className="padding-left">
          <span className="hotels__content__hotels-list__content__address">{item.address}</span>
          <div className="flex">
            {console.log(parseInt(item.phone))}
            {item.metro.map(some => <div key={some[0]}>
              <img
                src={some[1]}
                alt="metro-logo"
                className="hotels__content__hotels-list__content__metro__icon"/>
              <span className="hotels__content__hotels-list__content__metro__name">{some[0]}</span>
            </div>)}
          </div>
          <span className="hotels__content__hotels-list__content__work-time">Режим работы: {item.work_time}</span>
          <a
            href={`tel:+${item.phone.replace(/[^0-9.]+/g, '')}`}
            className="hotels__content__hotels-list__content__phone">{item.phone}</a>
          <span className="hotels__content__hotels-list__content__desc">{item.short_description}</span>
        </div>
      </div>
    </li>))
  }
};

export default HotelItem

/*
<div key={some[1]}>
  <img src={some[2]} alt="metro-logo" className="hotels__content__hotels-list__content__metro__icon"/>
  <span className="hotels__content__hotels-list__content__metro__name">{some[1]}</span>
</div>
*/