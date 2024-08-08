import React from "react";

import styles from "./SearchInput.module.scss";
import SearchIcon from "@/assets/icons/search.svg";

export const SearchInput = () => {
  return (
    <div className={styles.search}>
      <div className={styles.searchField}>
        <SearchIcon className={styles.searchIcon} />
        <input
          placeholder="What are you looking for?"
          type="text"
          className={styles.searchInput}
        />
      </div>
    </div>
  );
};
