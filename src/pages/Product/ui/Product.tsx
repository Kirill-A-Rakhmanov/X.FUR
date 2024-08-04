import React from "react";

import styles from "./Product.module.scss";
import { useParams } from "react-router-dom";
import { Trending } from "@/pages/pages";
import { ProductBlock } from "./blocks/blocks";

export const Product = () => {
  const { article } = useParams();

  return (
    <>
      <ProductBlock article={article} />
      <Trending />
    </>
  );
};
