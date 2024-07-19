import React from "react";
import { Hero } from "./blocks/Hero/hero";
import { Trending } from "./blocks/Trending/trending";
import { Creative } from "./blocks/Creative/creative";
import { Inspiration } from "./blocks/Inpiration/inspiration";

export const Home = () => {
  return (
    <>
      <Hero />
      <Trending />
      <Creative />
      <Inspiration />
    </>
  );
};
