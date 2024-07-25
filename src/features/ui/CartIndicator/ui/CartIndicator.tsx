import React from "react";
import { Link } from "react-router-dom";

import CartIcon from "@/assets/icons/cart.svg";
import styles from "./CartIndicator.module.scss";

export const CartIndicator = () => {
  return (
    <Link to={"/cart"} className={styles.wrapper}>
      <CartIcon className={styles.icon} />
      <span className={styles.quantity}>0</span>
    </Link>
  );
};
