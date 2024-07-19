import React from "react";

import styles from "./Template.module.scss";

type tProps = {
  img: string;
  alt: string;
  header: string;
  size?: string;
};

const Template = ({ img, alt, header, size }: tProps) => {
  return (
    <div className={[styles.template, size ? styles[size] : ""].join(" ")}>
      <img className={styles.cover} src={img} alt={alt} />
      <h2 className={styles.title}>{header}</h2>
    </div>
  );
};

export default Template;
