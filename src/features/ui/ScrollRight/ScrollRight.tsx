import { ScrollButton } from "@/shared/shared";
import React from "react";

type tProps = {
  onClick?: any;
};

export const ScrollRight = ({ onClick }: tProps) => {
  return <ScrollButton onClick={onClick} direction={"right"} />;
};
