import React from "react";

import styles from "./ItemsList.module.scss";
import { ProductRow } from "@/widgets/widgets";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { fetchItems, selectFilter, selectProducts } from "@/entities/entities";

export const ItemsList = () => {
  const dispatch = useAppDispatch();
  const params = useAppSelector(selectFilter);
  const { items, status } = useAppSelector(selectProducts);

  React.useEffect(() => {
    dispatch(fetchItems(params));
  }, [params]);

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
