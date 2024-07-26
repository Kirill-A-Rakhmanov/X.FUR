import React from "react";

import { handleClick } from "./handleClick";
import { PlusButton } from "@/shared/shared";

type tProps = {
  article: string;
};

export const IncreaseFavoriteQuantity = ({ article }: tProps) => {
  return <PlusButton onClick={() => handleClick(article)} />;
};
