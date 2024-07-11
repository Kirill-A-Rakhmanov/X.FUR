import React from "react";

import styles from "./Trending.module.scss";

const Trending = () => {
  return (
    <section className={styles.trending}>
      <div className={[styles.container && "", "_container"].join(" ")}>
        <div className={styles.content}>
          <h2 className={styles.header}></h2>
          <div className={styles.items}>
            <div className="tranding__item item">
              <div className="item__image">
                <img src="" alt="" />
              </div>
              <div className="item__title"></div>
              <div className="item__subtitle"></div>
              <div className="item__info">
                <div className="item__price"></div>
                <div className="item__actions">
                  <div className="item__add-to-cart"></div>
                  <div className="item__add-to-favorite"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
