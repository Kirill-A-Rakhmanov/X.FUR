import React from "react";
import styles from "./Layout.module.scss";

import logo from "@/assets/img/00 header/logo.png";
import CartIcon from "@/assets/icons/cart.svg";
import FavoriteIcon from "@/assets/icons/favorite.svg";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.container}>
          <img src={logo} alt="logo" className={styles.logo} />
          <div className={styles.search}>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.info}>
            <CartIcon className={styles.cartIcon} />
            <FavoriteIcon className={styles.favoriteIcon} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Layout;
