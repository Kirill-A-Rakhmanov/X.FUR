import React from "react";

import styles from "./Favorite.module.scss";
import { Items } from "./blocks";
import { Trending } from "@/pages/pages";

export const Favorite = () => {
  return (
    <>
      <Items />
      <Trending />
    </>
  );
};
