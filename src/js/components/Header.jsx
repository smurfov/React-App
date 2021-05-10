import React from 'react';
import {Link} from 'react-router-dom';
import {HOME_ROUTE} from '../utils/const';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to={HOME_ROUTE}><img src="img/logo.jpg" alt="Logo"/></Link>
      </div>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__item">
            <Link className="header__nav__link" to={HOME_ROUTE}>Добавить свой стиль</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header