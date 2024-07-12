import React from "react";

import AddToCartIcon from "@/assets/icons/add-to-cart.svg";
import FavoriteIcon from "@/assets/icons/favorite.svg";

import styles from "./ProductItem.module.scss";

const ProductItem = () => {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img
          src="https://www.ikea.com/fi/en/images/products/soederhamn-3-seat-section-gunnared-beige__0766696_pe753866_s5.jpg?f=m"
          alt="white sofa"
        />
      </div>
      <div className={styles.title}>SÖDERHAMN</div>
      <div className={styles.subtitle}>3-seat section</div>
      <div className={styles.info}>
        <div className={styles.price}>499 €</div>
        <div className={styles.actions}>
          <div className={[styles.iconWrapper, styles.addToCart].join(" ")}>
            <AddToCartIcon className={styles.icon} />
          </div>
          <div className={[styles.iconWrapper, styles.addToFavorite].join(" ")}>
            <FavoriteIcon className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
