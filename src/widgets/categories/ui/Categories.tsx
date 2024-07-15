import React from "react";

import styles from "./Categories.module.scss";

const categories: string[] = ["All", "Bedroom", "Living room", "Kitchen"];

const Categories = () => {
  const [categoryId, setCategoryId] = React.useState(0);

  const choseCategory = (index: number) => {
    setCategoryId(index);
  };

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((value, index) => (
          <li
            key={index}
            onClick={() => choseCategory(index)}
            className={index === categoryId ? styles.active : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
