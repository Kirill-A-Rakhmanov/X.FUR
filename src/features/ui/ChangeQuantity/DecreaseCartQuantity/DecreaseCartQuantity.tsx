import { MinusButton } from "@/shared/shared";
import React from "react";
import { handleClick } from "./handleClick";

type tProps = {
  article: string;
};

export const DecreaseCartQuantity = ({ article }: tProps) => {
  return <MinusButton onClick={() => handleClick(article)} />;
};
