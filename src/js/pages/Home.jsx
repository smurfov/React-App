import React from 'react';

const Home = () => {
  return (
    <section className="home__content">
      <span className="home__content__title">Найдем лучший отель для Вашего питомца там, где Вам удобно!</span>
      <form name="search-city" method="GET" className="home__content__form__adress">
        <input
          className="home__content__form__adress__input"
          type="text"
          id="input_address"
          placeholder="Введите адрес"
          autoFocus/>
        <input
          className="home__content__form__adress__btn"
          type="button"
          value="Найти"
          id="input_btn"/>
      </form>
    </section>
  )
}

export default Home;