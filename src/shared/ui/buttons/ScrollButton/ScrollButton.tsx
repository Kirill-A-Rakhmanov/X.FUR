import React from "react";

import styles from "./ScrollButton.module.scss";
import ArrowIcon from "@/assets/icons/arrow-right.svg";
import { tDirection } from "./types";

type Props = {
  direction: tDirection;
};

export const ScrollButton = ({ direction }: Props) => {
  return (
    <div className={styles.wrapper}>
      <ArrowIcon className={[styles.icon, styles[direction]].join(" ")} />
    </div>
  );
};
