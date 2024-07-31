import React from "react";

import styles from "./CartRow.module.scss";
import { useAppSelector } from "@/app/store/hooks";
import { selectCartItems } from "@/entities/entities";
import { CartItem } from "@/widgets/widgets";

export const CartRow = () => {
  const items = useAppSelector(selectCartItems);

  return (
    <div className={styles.wrapper}>
      {items.map((obj, index) => (
        <CartItem key={index} itemData={obj} />
      ))}
    </div>
  );
};
