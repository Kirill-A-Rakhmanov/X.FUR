import { MinusButton } from "@/shared/shared";
import React from "react";
import { handleClick } from "./handleClick";

type tProps = {
  article: string;
};

export const DecreaseFavoriteQuantity = ({ article }: tProps) => {
  return <MinusButton onClick={() => handleClick(article)} />;
};
