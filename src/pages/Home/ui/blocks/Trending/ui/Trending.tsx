import React from "react";

import styles from "./Trending.module.scss";
import { ScrollableArea } from "@/widgets/widgets";
import { ProductRow } from "@/widgets/ProductRow/productRow";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { fetchTrendingProducts, selectTrending } from "@/entities/entities";

export const Trending = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector(selectTrending);

  const params = React.useMemo(() => {
    return {
      sortby: "rating",
      page: "1",
      limit: "7",
    };
  }, []);

  React.useEffect(() => {
    if (!items.length) {
      dispatch(fetchTrendingProducts(params));
    }
  }, [params]);

  return (
    <section className={styles.trending}>
      <div
        className={[
          styles.container ? styles.container : "",
          "_container",
        ].join(" ")}
      >
        <h2 className={styles.header}>Trending now</h2>
        <div className={styles.content}>
          <ScrollableArea
            content={
              <div className={styles.row}>
                <ProductRow items={items} status={status} />
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};
