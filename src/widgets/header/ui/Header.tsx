import React from "react";

import logo from "@/assets/img/00 header/logo.png";
import CartIcon from "@/assets/icons/cart.svg";
import FavoriteIcon from "@/assets/icons/favorite.svg";
import SearchIcon from "@/assets/icons/search.svg";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container + " _container"}>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="logo" />
        </a>
        <div className={styles.search}>
          <div className={styles.searchField}>
            <SearchIcon className={styles.searchIcon} />
            <input
              placeholder="What are you looking for?"
              type="text"
              className={styles.searchInput}
            />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.iconWrapper}>
            <FavoriteIcon className={styles.icon} />
            <span className={styles.iconCount}>0</span>
          </div>
          <div className={styles.iconWrapper}>
            <CartIcon className={styles.icon} />
            <span className={styles.iconCount}>0</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
