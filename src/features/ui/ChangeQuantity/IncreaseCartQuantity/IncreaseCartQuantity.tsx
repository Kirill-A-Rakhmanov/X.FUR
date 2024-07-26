import { PlusButton } from "@/shared/shared";
import React from "react";
import { handleClick } from "./handleClick";

type tProps = {
  article: string;
};

export const IncreaseCartQuantity = ({ article }: tProps) => {
  return <PlusButton onClick={() => handleClick(article)} />;
};
