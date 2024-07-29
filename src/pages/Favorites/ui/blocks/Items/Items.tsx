import React from "react";

import styles from "./Items.module.scss";
import { FavoriteRow } from "@/widgets/widgets";

export const Items = () => {
  return (
    <section className={styles.items}>
      <div className={[styles.container, "_container"].join(" ")}>
        <div className={styles.content}>
          <h2 className={styles.header}>Favorite items</h2>
          <div className={styles.wrapper}>
            <FavoriteRow />
          </div>
        </div>
      </div>
    </section>
  );
};
