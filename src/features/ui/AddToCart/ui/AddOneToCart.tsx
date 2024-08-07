import { useAppDispatch } from "@/app/store/hooks";
import { addItemToCart, tItemCard } from "@/entities/entities";
import { AddAllToCartButton, AddOneToCartButton } from "@/shared/shared";
import React from "react";

type tProps = {
  item: tItemCard;
};

export const AddOneToCart = ({ item }: tProps) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addItemToCart(item));
  };
  return <AddOneToCartButton onClick={() => handleClick()} />;
};
