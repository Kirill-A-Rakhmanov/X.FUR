import React from "react";

import styles from "./Filters.module.scss";
import {
  selectFilter,
  setOrder,
  setSort,
  tOrder,
  tSortBy,
} from "@/entities/entities";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import ArrowIcon from "@/assets/icons/arrow-right.svg";

export const FilterSortBy = () => {
  const dispatch = useAppDispatch();
  const { sortby, order } = useAppSelector(selectFilter);

  const [isOpen, setIsOpen] = React.useState(false);
  const sortRef = React.useRef(null);

  const sortOptions: tSortBy[] = [
    { title: "Price: low to high", sortType: "basePrice", order: "asc" },
    { title: "Price: high to low", sortType: "basePrice", order: "desc" },
    { title: "Rating", sortType: "rating", order: "asc" },
  ];

  const handleChange = (type: string, order: tOrder) => {
    dispatch(setSort(type));
    dispatch(setOrder(order));
    setIsOpen(false);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      ref={sortRef}
      onClick={() => togglePopup()}
      className={[styles.wrapper, isOpen ? styles.open : ""].join(" ")}
    >
      <span className={styles.title}>Sort</span>
      <ArrowIcon
        className={[styles.icon, isOpen ? styles.active : ""].join(" ")}
      />
      {isOpen && (
        <div className={styles.popup}>
          <ul className={styles.options}>
            {sortOptions.map((obj, index) => (
              <li
                onClick={() => handleChange(obj.sortType, obj.order)}
                key={index}
                className={[
                  styles.option,
                  obj.sortType === sortby && obj.order === order
                    ? styles.active
                    : "",
                ].join(" ")}
              >
                {obj.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
