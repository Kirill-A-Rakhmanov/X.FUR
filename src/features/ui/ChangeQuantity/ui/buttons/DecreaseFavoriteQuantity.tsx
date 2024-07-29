import { MinusButton } from "@/shared/shared";
import React from "react";
import { useAppDispatch } from "@/app/store/hooks";
import { decrementFavoriteQuantity } from "@/entities/entities";

type tProps = {
  article: string;
};

export const DecreaseFavoriteQuantity = ({ article }: tProps) => {
  const dispatch = useAppDispatch();

  const handleClick = (article: string) => {
    dispatch(decrementFavoriteQuantity(article));
  };

  return <MinusButton onClick={() => handleClick(article)} />;
};
