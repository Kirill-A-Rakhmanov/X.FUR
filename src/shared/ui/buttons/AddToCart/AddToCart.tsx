import React from "react";

import styles from "./AddToCart.module.scss";
import AddToCartIcon from "@/assets/icons/add-to-cart.svg";

export const AddToCart = () => {
  return (
    <div className={styles.wrapper}>
      <AddToCartIcon className={styles.icon} />
    </div>
  );
};
