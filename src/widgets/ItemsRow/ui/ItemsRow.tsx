import React from "react";

import styles from "./ItemsRow.module.scss";
import { getItems, ProductItem, queryParams, tItem } from "@/entities/entities";
import { ScrollLeft, ScrollRight } from "@/features/features";

export const ItemsRow = () => {
  const [trendingItems, setTrendingItems] = React.useState<tItem[]>([]);
  const itemsContainerRef = React.useRef(null);
  const scrollPosition = React.useRef<number>(0);
  const scrollStep = React.useRef<number>(0);
  const [scrollOnRight, setScrollOnRight] = React.useState(false);
  const [scrollOnLeft, setScrollOnLeft] = React.useState(false);

  function handleScroll() {
    scrollPosition.current = itemsContainerRef.current.scrollLeft;
    if (itemsContainerRef.current.scrollLeft === 0) {
      setScrollOnLeft(false);
      setScrollOnRight(true);
    } else if (
      itemsContainerRef.current.scrollLeft ===
      itemsContainerRef.current.scrollWidth -
        itemsContainerRef.current.offsetWidth
    ) {
      setScrollOnLeft(true);
      setScrollOnRight(false);
    } else {
      setScrollOnLeft(true);
      setScrollOnRight(true);
    }
  }

  function handleButtonScroll(scrollAmount: number) {
    itemsContainerRef.current.scrollLeft =
      scrollPosition.current + scrollAmount;
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

  // Вычисление шага скролла в зависимости от ширины контейнера
  React.useEffect(() => {
    function MinusTenPercent(value: number) {
      return Math.trunc(value * 0.9);
    }
    function calcScrollStep() {
      scrollStep.current = MinusTenPercent(
        itemsContainerRef.current.offsetWidth
      );
    }

    calcScrollStep();

    window.addEventListener("resize", calcScrollStep);
    return () => {
      window.removeEventListener("resize", calcScrollStep);
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
      <div className={styles.scrollLeft}>
        {scrollOnLeft && (
          <ScrollLeft onClick={() => handleButtonScroll(-scrollStep.current)} />
        )}
      </div>
      <div className={styles.scrollRight}>
        {scrollOnRight && (
          <ScrollRight onClick={() => handleButtonScroll(scrollStep.current)} />
        )}
      </div>
    </div>
  );
};
