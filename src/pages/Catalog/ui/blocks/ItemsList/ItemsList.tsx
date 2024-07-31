import React from "react";

import styles from "./ItemsList.module.scss";
import { ProductRow } from "@/widgets/widgets";
import { useAppSelector } from "@/app/store/hooks";
import { selectFilter } from "@/entities/entities";

export const ItemsList = () => {
  const params = useAppSelector(selectFilter);

  return (
    <section className={styles.itemsList}>
      <div className={[styles.container, "_container"].join(" ")}>
        <div className={styles.content}>
          <ProductRow params={params} />
        </div>
      </div>
    </section>
  );
};
