import React from "react";

import styles from "./Filters.module.scss";
import { FilterSortBy } from "@/widgets/widgets";

export const Filters = () => {
  return (
    <section className={styles.filters}>
      <div className={[styles.container, "_container"].join(" ")}>
        <div className={styles.content}>
          <FilterSortBy />
          {/* <FilterSortBy /> */}
        </div>
      </div>
    </section>
  );
};
