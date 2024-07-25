import React from "react";

import styles from "./ProductRow.module.scss";
import {
  fetchTrendingProducts,
  ProductItemSkeleton,
  queryParams,
  selectTrendingItems,
  selectTrendingStatus,
} from "@/entities/entities";
import { ProductCard } from "@/widgets/widgets";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

type tProps = {
  params: queryParams;
};

export const ProductRow = React.memo(({ params }: tProps) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectTrendingItems);
  const status = useAppSelector(selectTrendingStatus);

  React.useEffect(() => {
    dispatch(fetchTrendingProducts(params));
  }, [params]);

  return (
    <>
      {status !== "success" && <ProductItemSkeleton cards={7} />}
      {items.map((obj) => (
        <ProductCard key={obj.article} itemData={obj} />
      ))}
    </>
  );
});
