import React from "react";

import styles from "./SetFavoriteQuantity.module.scss";
import { handleChange } from "./handleChange";

export const SetFavoriteQuantity = () => {
  const inputRef = React.useRef(null);

  return (
    <input
      className={styles.input}
      ref={inputRef}
      onChange={() => handleChange()}
      type="number"
      min="1"
      max="999"
    />
  );
};
