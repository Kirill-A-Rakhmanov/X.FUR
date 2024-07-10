import React from "react";

import "./scss/app.scss";
import logo from "@/assets/img/00 header/logo.png";
import CartIcon from "@/assets/icons/cart.svg";
import FavoriteIcon from "@/assets/icons/favorite.svg";
import SearchIcon from "@/assets/icons/search.svg";
import bedroomImg from "@/assets/img/01 hero/bedroom.png";
import kitchenImg from "@/assets/img/01 hero/kitchen.png";
import livingroomImg from "@/assets/img/01 hero/living room.png";
import electronicsImg from "@/assets/img/01 hero/electronics.jpg";

const App = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__container _container">
          <a href="/" className="header__logo">
            <img src={logo} alt="logo" />
          </a>
          <div className="header__search search">
            <div className="search__field">
              <SearchIcon className="search__icon icon-search" />
              <input
                placeholder="What are you looking for?"
                type="text"
                className="search__input"
              />
            </div>
          </div>
          <div className="header__info">
            <div className="header__icon-wrapper">
              <FavoriteIcon className="header__icon icon-favorite" />
              <span className="header__icon-count">0</span>
            </div>
            <div className="header__icon-wrapper">
              <CartIcon className="header__icon icon-cart" />
              <span className="header__icon-count">0</span>
            </div>
          </div>
        </div>
      </header>
      <main className="page">
        <section className="page__hero hero">
          <div className="hero__container _container">
            <div className="hero__content">
              <div className="hero__template template template-4x">
                <img
                  className="template__cover"
                  src={livingroomImg}
                  alt="living room image"
                />
                <h2 className="template__header">Live Comfortably</h2>
              </div>
              <div className="hero__template template template-2x">
                <img
                  className="template__cover"
                  src={bedroomImg}
                  alt="bedroom image"
                />
                <h2 className="template__header">Bedroom</h2>
              </div>
              <div className="hero__template template">
                <img
                  className="template__cover"
                  src={kitchenImg}
                  alt="kitchen image"
                />
                <h2 className="template__header">Kitchen</h2>
              </div>
              <div className="hero__template template template-1x">
                <img
                  className="template__cover"
                  src={electronicsImg}
                  alt="electronics image"
                />
                <h2 className="template__header">Electronics</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="page__trending tranding">
          <div className="tranding__container _container">
            <div className="tranding__content">
              <h2 className="tranding__header">Tranding now</h2>
              <div className="tranding__items">
                <div className="tranding__item item">
                  <div className="item__image">
                    <img src="" alt="" />
                  </div>
                  <div className="item__title"></div>
                  <div className="item__subtitle"></div>
                  <div className="item__info">
                    <div className="item__price"></div>
                    <div className="item__actions">
                      <div className="item__add-to-cart"></div>
                      <div className="item__add-to-favorite"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__container _container">
          <div className="footer__top">
            <div className="footer__top-header">Newsletter</div>
            <form className="footer__form">
              <div className="footer__form-field">
                <input
                  placeholder="your@email.com"
                  className="footer__form-input"
                  type="email"
                />
              </div>
              <button className="footer__form-button">Subscribe</button>
            </form>
          </div>
          <div className="footer__bottom">
            <nav className="footer__navigation">
              <ul className="footer__navigation-items">
                <li className="footer__navigation-item">
                  <a href="/" className="footer__navigation-link">
                    About
                  </a>
                </li>
                <li className="footer__navigation-item">
                  <a href="/" className="footer__navigation-link">
                    FAQ
                  </a>
                </li>
                <li className="footer__navigation-item">
                  <a href="/" className="footer__navigation-link">
                    News
                  </a>
                </li>
                <li className="footer__navigation-item">
                  <a href="/" className="footer__navigation-link">
                    Careers
                  </a>
                </li>
                <li className="footer__navigation-item">
                  <a href="/" className="footer__navigation-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
            <div className="footer__label">Built with love</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
