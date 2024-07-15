import React from "react";

import styles from "./Inspiration.module.scss";
import Categories from "@/widgets/categories/ui/Categories";
import Galery from "@/widgets/galery/ui/Galery";

const Inspiration = () => {
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
          <Galery />
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
