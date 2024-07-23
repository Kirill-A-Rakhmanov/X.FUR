import React from "react";

import styles from "./AddToFavoriteButton.module.scss";
import FavoriteIcon from "@/assets/icons/favorite.svg";

export const AddToFavoriteButton = () => {
  return (
    <div className={styles.wrapper}>
      <FavoriteIcon className={styles.icon} />
    </div>
  );
};
