import React from "react";

import styles from "./SetQuantity.module.scss";
import { MinusButton, PlusButton } from "@/shared/shared";
import { useAppDispatch } from "@/app/store/hooks";

type tProps = {
  article: string;
  quantity: number;
};

export const SetFavoriteQuantity = ({ article, quantity }: tProps) => {
  const inputRef = React.useRef(null);
  const dispatch = useAppDispatch();

  const handlePlusClick = () => {};
  const handleMinusClick = () => {};
  const handleChange = () => {};

  return (
    <div className={styles.wrapper}>
      <div>
        <MinusButton onClick={() => handleMinusClick()} />
      </div>
      <input
        ref={inputRef}
        onChange={() => handleChange()}
        className={styles.input}
        type="number"
        min="1"
        max="999"
      />
      <div>
        <PlusButton onClick={() => handlePlusClick()} />
      </div>
    </div>
  );
};
