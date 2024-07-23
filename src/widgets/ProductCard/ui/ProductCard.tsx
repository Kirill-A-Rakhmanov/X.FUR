import { ProductItem, tItemCard } from "@/entities/entities";
import { AddToCart, AddToFavorite } from "@/features/features";
import React from "react";

export const ProductCard = React.memo(
  ({ id, title, subtitle, price, image, color, article }: tItemCard) => {
    return (
      <ProductItem
        key={id}
        title={title}
        subtitle={subtitle}
        price={price}
        image={image}
        actionAddToCart={<AddToCart />}
        actionAddToFavorite={<AddToFavorite />}
      />
    );
  }
);
