import React from "react";

import AddToCartIcon from "@/assets/icons/add-to-cart.svg";
import FavoriteIcon from "@/assets/icons/favorite.svg";

import styles from "./ProductItem.module.scss";
import { tItemCard } from "../../model/types";
import { AddToCart, AddToFavorite } from "@/shared/shared";

export const ProductItem = (props: tItemCard) => {
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
};
