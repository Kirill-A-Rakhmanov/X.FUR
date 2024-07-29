import { useAppDispatch } from "@/app/store/hooks";
import { decrementCartQuantity } from "@/entities/entities";
import { MinusButton } from "@/shared/shared";
import React from "react";

type tProps = {
  article: string;
};

export const DecreaseCartQuantity = ({ article }: tProps) => {
  const dispatch = useAppDispatch();

  const handleClick = (article: string) => {
    dispatch(decrementCartQuantity(article));
  };

  return <MinusButton onClick={() => handleClick(article)} />;
};
