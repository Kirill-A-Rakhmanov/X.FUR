import React from "react";

import styles from "./Trending.module.scss";
import { ScrollableArea } from "@/widgets/widgets";
import { ProductRow } from "@/widgets/ProductRow/productRow";

export const Trending = () => {
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
              <ProductRow
                params={{
                  sortby: "rating",
                  page: "1",
                  limit: "7",
                }}
              />
            }
          />
        </div>
      </div>
    </section>
  );
};
