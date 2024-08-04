import React from "react";

import styles from "./Template.module.scss";
import { Link } from "react-router-dom";
import { queryParams } from "@/entities/entities";
import qs from "query-string";

type tProps = {
  collection: string;
  img: string;
  alt: string;
  header: string;
  size?: string;
};

const Template = ({ img, alt, header, size, collection }: tProps) => {
  const params: queryParams = {
    collection,
  };

  const queryParams = qs.stringify(params);

  return (
    <Link
      to={`/catalog?${queryParams}`}
      className={[styles.template, size ? styles[size] : ""].join(" ")}
    >
      <img className={styles.cover} src={img} alt={alt} />
      <h2 className={styles.title}>{header}</h2>
    </Link>
  );
};

export default Template;
