import React from "react";

import styles from "./ItemsRow.module.scss";
import { ScrollButton } from "@/shared/shared";
import { getItems, ProductItem, queryParams, tItem } from "@/entities/entities";

export const ItemsRow = () => {
  const [trendingItems, setTrendingItems] = React.useState<tItem[]>([]);
  const timerDebounceRef = React.useRef();

  const itemsContainerRef = React.useRef(null);
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [scrollWidth, setScrollWidth] = React.useState(0);
  const [scrollStep, setScrollStep] = React.useState(0);

  function handleScroll() {
    setScrollPosition(itemsContainerRef.current.scrollLeft);
  }

  // Получение товаров с сервера. Пока что это стейт, но потом это уедет в редакс
  React.useEffect(() => {
    const params: queryParams = {
      sortby: "rating",
      page: "1",
      limit: "7",
    };
    getItems(params).then((data) => {
      setTrendingItems(data);
    });
  }, []);

  //Установка шага скролла в зависимости от ширины контейнера
  React.useEffect(() => {
    if (itemsContainerRef) {
      setScrollWidth(
        itemsContainerRef.current.scrollWidth -
          itemsContainerRef.current.offsetWidth
      );
      setScrollStep(itemsContainerRef.current.offsetWidth - 100);
    }
  }, [trendingItems]);

  React.useEffect(() => {
    function handleResize() {
      setScrollStep(itemsContainerRef.current.offsetWidth - 100);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        ref={itemsContainerRef}
        onScroll={handleScroll}
        className={styles.items}
      >
        {trendingItems.map((value, index) => (
          <ProductItem
            key={index}
            id={value.id}
            title={value.title}
            subtitle={value.subtitle}
            price={value.basePrice}
            image={value.colors[0].images[0]}
            article={value.colors[0].article}
          />
        ))}
      </div>

      <div>{scrollPosition}</div>
      <div>{scrollWidth}</div>
      <div>{scrollStep}</div>

      <div className={styles.scrollLeft}>
        <ScrollButton direction={"left"} />
      </div>
      <div className={styles.scrollRight}>
        <ScrollButton direction={"right"} />
      </div>
    </div>
  );
};
