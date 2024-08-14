import React from "react";

import styles from "./Option.module.scss";
import clsx from "clsx";

type tProps = {
  title: string;
  active: boolean;
  onClick: React.MouseEventHandler;
};

export const Option = ({ title, active, onClick }: tProps) => {
  return (
    <li onClick={onClick} className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.radio}>
        <div
          className={clsx(styles.radioSymbol, active && styles.active)}
        ></div>
      </div>
    </li>
  );
};
