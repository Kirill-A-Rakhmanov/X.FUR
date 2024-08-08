import React from "react";

import styles from "./ItemsList.module.scss";
import { ProductRow } from "@/widgets/widgets";
import { useAppSelector } from "@/app/store/hooks";
import { selectProducts } from "@/entities/entities";

export const ItemsList = () => {
  const { items, status } = useAppSelector(selectProducts);

  return (
    <section className={styles.itemsList}>
      <div className={[styles.container, "_container"].join(" ")}>
        <div className={styles.content}>
          <ProductRow items={items} status={status} />
        </div>
      </div>
    </section>
  );
};
