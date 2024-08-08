import React from "react";

import styles from "./CollectionGallery.module.scss";

const imageUrls: string[] = [
  "https://www.ikea.com/ext/ingkadam/m/4519147690d535ea/original/PH191697.jpg?f=xs",
  "https://www.ikea.com/ext/ingkadam/m/7081d3b6b9464ba/original/PH179580-crop001.jpg?f=xs",
  "https://www.ikea.com/ext/ingkadam/m/71ca9c37f63e577e/original/PH193623-crop002.jpg?f=xs",
  "https://www.ikea.com/ext/ingkadam/m/7257b2b142fd5d3c/original/PH195653.jpg?f=xs",
  "https://www.ikea.com/ext/ingkadam/m/25ed020ad0ac1922/original/PE743545-crop001.jpg?f=xs",
  "https://www.ikea.com/ext/ingkadam/m/2e6c72167c491f8d/original/PH190441.jpg?f=xs",
];

export const CollectionGallery = () => {
  return (
    <div className={styles.gallery}>
      {imageUrls.map((value, index) => (
        <div key={index} className={[styles.image].join(" ")}>
          <img src={value} alt="" />
        </div>
      ))}
    </div>
  );
};
