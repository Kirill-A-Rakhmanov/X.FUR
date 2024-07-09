import React from "react";

import "./scss/app.scss";
import logo from "./assets/img/00 header/logo.png";
import CartIcon from "./assets/icons/cart.svg";
import FavoriteIcon from "./assets/icons/favorite.svg";
import SearchIcon from "./assets/icons/search.svg";

const App = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__container _container">
          <a href="*" className="header__logo">
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
            </div>
            <div className="header__icon-wrapper">
              <CartIcon className="header__icon icon-cart" />
            </div>
          </div>
        </div>
      </header>
      <main className="page">
        <section className="page__hero"></section>
      </main>
      <footer className="footer"></footer>
    </div>
  );
};

export default App;
