import React from "react";

import styles from "./AddToCartButton.module.scss";
import AddToCartIcon from "@/assets/icons/add-to-cart.svg";

export const AddToCartButton = () => {
  return (
    <div className={styles.wrapper}>
      <AddToCartIcon className={styles.icon} />
    </div>
  );
};
