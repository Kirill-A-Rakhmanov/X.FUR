import React from "react";

import styles from "./Catalog.module.scss";
import { Filters } from "./blocks/Filters/Filters";
import { ItemsList } from "./blocks/ItemsList/ItemsList";

export const Catalog = () => {
  return (
    <>
      <Filters />
      <ItemsList />
    </>
  );
};
