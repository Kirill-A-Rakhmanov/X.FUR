import React from "react";

import styles from "./Creative.module.scss";
import sofaImg from "@/assets/img/02 creative/sofa.jpg";
import { LinkButton } from "@/shared/shared";

export const Creative = () => {
  return (
    <section className={styles.creative}>
      <div
        className={[
          styles.container ? styles.container : "",
          "_container",
        ].join(" ")}
      >
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoWrapper}>
              <div className={styles.title}>Creative harmonious living</div>
              <div className={styles.description}>
                X.FUR products are made with care to fit perfectly in your
                interior
              </div>
              <LinkButton link={"/products/"} text={"SHOP NOW"} />
              {/* todo: поставить в ссылку артикул */}
            </div>
          </div>
          <div className={styles.image}>
            <img src={sofaImg} alt="sofa" />
          </div>
        </div>
      </div>
    </section>
  );
};
