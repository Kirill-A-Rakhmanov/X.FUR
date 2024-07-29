import { useAppDispatch } from "@/app/store/hooks";
import { addToCart, tItemCard } from "@/entities/entities";
import { AddToCartButton } from "@/shared/shared";
import React from "react";

type tProps = {
  item: tItemCard;
};

export const AddToCart = ({ item }: tProps) => {
  const dispatch = useAppDispatch();

  const handleClick = (item: tItemCard) => {
    dispatch(addToCart(item));
  };

  return <AddToCartButton onClick={() => handleClick(item)} />;
};
