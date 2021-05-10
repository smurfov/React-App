import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__content__tab">
            <img src="img/logo.jpg" className="footer__content__tab__logo" alt="Logo"/>
          </div>
          <div className="footer__content__tab"></div>
          <div className="footer__content__tab"></div>
          <div className="footer__content__tab">
            <ul className="footer__nav">
              <li className="footer__nav__item">
                <a href="help.html" className="footer__nav__link">Связаться с нами</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer