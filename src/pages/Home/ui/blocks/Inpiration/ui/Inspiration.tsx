import React from "react";

import styles from "./Inspiration.module.scss";
import { Categories, Gallery } from "@/widgets/widgets";

export const Inspiration = () => {
  return (
    <section className={styles.inspiration}>
      <div
        className={[
          styles.container ? styles.container : "",
          "_container",
        ].join(" ")}
      >
        <div className={styles.content}>
          <h2 className={styles.header}>
            More ideas and inspiration from your great value furniture store
          </h2>
          <Categories />
          <Gallery />
        </div>
      </div>
    </section>
  );
};
