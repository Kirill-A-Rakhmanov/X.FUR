import React from "react";

import styles from "./PrimaryButton.module.scss";
import AddToCartIcon from "@/assets/icons/add-to-cart.svg";

export const PrimaryButton = () => {
  return (
    <div className={styles.wrapper}>
      <svg className={styles.icon}></svg>
    </div>
  );
};
