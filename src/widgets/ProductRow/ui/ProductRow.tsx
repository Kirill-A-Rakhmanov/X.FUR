import React from "react";
import { useSelector } from "react-redux";

import styles from "./ProductRow.module.scss";
import {
  fetchTrendingProducts,
  queryParams,
  trendingItems,
  useAppDispatch,
} from "@/entities/entities";
import { ProductCard } from "@/widgets/widgets";

type tProps = {
  params: queryParams;
};

export const ProductRow = React.memo(({ params }: tProps) => {
  const dispatch = useAppDispatch();
  const items = useSelector(trendingItems);

  React.useEffect(() => {
    dispatch(fetchTrendingProducts(params));
  }, [params]);

  return (
    <>
      {items.map((obj) => (
        <ProductCard
          id={obj.id}
          title={obj.title}
          subtitle={obj.subtitle}
          price={obj.price}
          image={obj.image}
          color={obj.color}
          article={obj.article}
        />
      ))}
    </>
  );
});
