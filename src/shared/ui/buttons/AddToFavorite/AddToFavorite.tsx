import React from "react";

import styles from "./AddToFavorite.module.scss";
import FavoriteIcon from "@/assets/icons/favorite.svg";

export const AddToFavorite = () => {
  return (
    <div className={styles.wrapper}>
      <FavoriteIcon className={styles.icon} />
    </div>
  );
};
