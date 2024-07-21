import React from "react";

import styles from "./ProductItem.module.scss";
import { tItemCard } from "../../model/types";
import { AddToCart, AddToFavorite } from "@/shared/shared";

export const ProductItem = React.memo((props: tItemCard) => {
  const { id, title, subtitle, price, image, article } = props;

  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={image} alt="white sofa" />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.info}>
        <div className={styles.price}>{price} €</div>
        <div className={styles.actions}>
          <AddToCart />
          <AddToFavorite />
        </div>
      </div>
    </div>
  );
});
