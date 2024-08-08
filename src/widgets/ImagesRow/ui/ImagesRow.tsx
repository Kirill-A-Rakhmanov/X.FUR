import React from "react";

import styles from "./ImagesRow.module.scss";

type tProps = {
  images: string[];
  activeIndex: number;
  onClick: React.MouseEventHandler;
};

export const ImagesRow = ({ images, activeIndex, onClick }: tProps) => {
  return (
    <div className={styles.content}>
      {images.map((url, index) => (
        <div
          key={index}
          data-index={index}
          onClick={onClick}
          className={[
            styles.wrapper,
            activeIndex === index ? styles.active : "",
          ].join(" ")}
        >
          <div className={styles.image}>
            <img src={url} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};
