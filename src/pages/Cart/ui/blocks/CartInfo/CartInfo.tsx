import React from "react";

import styles from "./CartInfo.module.scss";
import { useAppSelector } from "@/app/store/hooks";
import { selectCartQuantity } from "@/entities/entities";
import { NoItems } from "./NoItems/NoItems";
import { CartItems } from "./CartItems/CartItems";

export const CartInfo = () => {
  const quantity = useAppSelector(selectCartQuantity);

  return (
    <section className={styles.cartInfo}>
      <div className={[styles.container, "_container"].join(" ")}>
        <div className={styles.content}>
          {quantity ? <CartItems /> : <NoItems />}
        </div>
      </div>
    </section>
  );
};
