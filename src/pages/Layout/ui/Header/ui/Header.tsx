import React from "react";

import logo from "@/assets/img/00 header/logo.png";
import SearchIcon from "@/assets/icons/search.svg";

import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { CartIndicator, FavoriteIndicator } from "@/features/features";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container + " _container"}>
        <Link to={"/"} className={styles.logo}>
          <img src={logo} alt="logo" />
        </Link>
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
          <Link className={styles.catalog} to={"/catalog"}>
            Catalog
          </Link>
          <FavoriteIndicator />
          <CartIndicator />
        </div>
      </div>
    </header>
  );
};
