import React from "react";

import styles from "./CurrentFilters.module.scss";
import { ClearAll, ClearCategory, ClearCollection } from "@/features/features";
import { useAppSelector } from "@/app/store/hooks";
import { selectFilter } from "@/entities/entities";

export const CurrentFilters = () => {
  const { category, collection } = useAppSelector(selectFilter);
  return (
    <section className={styles.filters}>
      <div className={[styles.container, "_container"].join(" ")}>
        {(category || collection) && (
          <div className={styles.content}>
            {category && <ClearCategory />}
            {collection && <ClearCollection />}
            <ClearAll />
          </div>
        )}
      </div>
    </section>
  );
};
