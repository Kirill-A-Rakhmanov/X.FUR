import React from "react";

import styles from "./Subtotal.module.scss";

export const Subtotal = () => {
  return (
    <section className={styles.subtotal}>
      <div className={[styles.container, "_container"].join(" ")}>
        <div className={styles.content}></div>
      </div>
    </section>
  );
};
