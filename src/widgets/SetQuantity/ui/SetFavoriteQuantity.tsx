import React from "react";

import styles from "./SetQuantity.module.scss";
import {
  ChangeFavoriteQuantity,
  DecreaseFavoriteQuantity,
  IncreaseFavoriteQuantity,
} from "@/features/features";
import { useAppDispatch } from "@/app/store/hooks";
import { removeFromFavorite, tSetQuantity } from "@/entities/entities";

export const SetFavoriteQuantity = ({ article, quantity }: tSetQuantity) => {
  const dispatch = useAppDispatch();

  if (quantity < 1) {
    dispatch(removeFromFavorite(article));
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.button}>
        <DecreaseFavoriteQuantity article={article} />
      </div>
      <div className={styles.input}>
        <ChangeFavoriteQuantity article={article} quantity={quantity} />
      </div>
      <div className={styles.button}>
        <IncreaseFavoriteQuantity quantity={quantity} article={article} />
      </div>
    </div>
  );
};
