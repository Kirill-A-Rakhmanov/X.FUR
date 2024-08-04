import React from "react";

import styles from "./ProductBlock.module.scss";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  clearItemData,
  fetchItemData,
  mapImagesByArticle,
  selectProductItem,
} from "@/entities/entities";
import { ProductGalery } from "./ProductGalery/ProductGalery";

type tProps = {
  article: string;
};

export const ProductBlock = ({ article }: tProps) => {
  const dispatch = useAppDispatch();
  const { item, status } = useAppSelector(selectProductItem);

  React.useEffect(() => {
    dispatch(fetchItemData(article));

    return () => {
      dispatch(clearItemData());
    };
  }, [article]);

  const images = mapImagesByArticle(item, article);
  // console.log(images);
  // console.log("render");
  console.log(status);

  return (
    <section className={styles.productBlock}>
      <div
        className={[
          styles.container ? styles.container : "",
          "_container",
        ].join(" ")}
      >
        <div className={styles.content}>
          <ProductGalery />
          {article}
        </div>
      </div>
    </section>
  );
};
