import React from "react";

import styles from "./SearchField.module.scss";
import SearchIcon from "@/assets/icons/search.svg";
import ClearIcon from "@/assets/icons/close.svg";
import BackIcon from "@/assets/icons/arrow-forward.svg";
import {
  clearSearchItems,
  fetchSearchItems,
  selectFilter,
  selectSearch,
  setSearch,
} from "@/entities/entities";
import { Search } from "@/features/features";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { useDebounce } from "@/shared/shared";
import { SearchResult } from "@/widgets/widgets";

export const SearchField = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const searchRef = React.useRef<HTMLDivElement>(null);
  const { items, status } = useAppSelector(selectSearch);
  const { search } = useAppSelector(selectFilter);
  const debouncedSearch = useDebounce(search);

  const openPopup = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };
  const closePopup = () => {
    setIsOpen(false);
  };
  const clearSearch = () => {
    dispatch(setSearch(""));
  };

  React.useEffect(() => {
    if (debouncedSearch) {
      dispatch(fetchSearchItems({ search: debouncedSearch }));
    } else {
      dispatch(clearSearchItems());
    }
  }, [debouncedSearch]);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !e.composedPath().includes(searchRef.current)) {
        closePopup();
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        ref={searchRef}
        className={[styles.dropdown, isOpen ? styles.open : ""].join(" ")}
      >
        <div onClick={() => openPopup()} className={styles.input}>
          <SearchIcon
            className={[
              styles.searchIcon,
              search ? styles.active : "",
              isOpen ? styles.open : "",
            ].join(" ")}
          />
          <BackIcon
            onClick={() => closePopup()}
            className={[styles.back, isOpen ? styles.active : ""].join(" ")}
          />
          <Search search={search} />
          <ClearIcon
            onClick={() => clearSearch()}
            className={[styles.clear, isOpen ? styles.active : ""].join(" ")}
          />
        </div>
        <div className={[styles.results, isOpen ? styles.open : ""].join(" ")}>
          <SearchResult
            onChoose={() => {
              closePopup();
              clearSearch();
            }}
            search={debouncedSearch}
            items={items}
            status={status}
          />
        </div>
      </div>
    </div>
  );
};
