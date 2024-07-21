import React from "react";

import styles from "./Trending.module.scss";
import { ItemsRow } from "@/widgets/widgets";

export const Trending = () => {
  // const [scrollPosition, setScrollPosition] = React.useState(0);
  // const [scrollWidth, setScrollWidth] = React.useState(0);
  // const [scrollStep, setScrollStep] = React.useState(0);

  // const itemsContainerRef = React.useRef(null);

  // function handleButtonScroll(scrollAmount: number) {
  //   const newScrollPosition = scrollPosition + scrollAmount;
  //   if (newScrollPosition < 0) {
  //     setScrollPosition(0);
  //   } else if (newScrollPosition > scrollWidth) {
  //     setScrollPosition(scrollWidth);
  //   } else {
  //     setScrollPosition(newScrollPosition);
  //   }
  //   itemsContainerRef.current.scrollLeft = newScrollPosition;
  // }

  // function handleScroll() {
  //   setScrollPosition(itemsContainerRef.current.scrollLeft);
  // }

  // Необходимо оставить в этом блоке всего один useEffect, он будет отвечать за загрузку товаров
  // const [trendingItems, setTrendingItems] = React.useState<tItem[]>([]);

  // React.useEffect(() => {
  //   const params: queryParams = {
  //     sortby: "rating",
  //     page: "1",
  //     limit: "7",
  //   };
  //   getItems(params).then((data) => {
  //     setTrendingItems(data);
  //   });
  // }, []);

  //todo: Выенсти всю логику, которая отвечает за скролл в отдельный виджет/шаред
  // React.useEffect(() => {
  //   if (itemsContainerRef) {
  //     setScrollWidth(
  //       itemsContainerRef.current.scrollWidth -
  //         itemsContainerRef.current.offsetWidth
  //     );
  //     setScrollStep(scrollWidth - 100);
  //   }
  // }, [trendingItems]);

  return (
    <section className={styles.trending}>
      <div
        className={[
          styles.container ? styles.container : "",
          "_container",
        ].join(" ")}
      >
        <div className={styles.content}>
          <h2 className={styles.header}>Trending now</h2>
          <ItemsRow />
          {/* <div className={styles.itemsWrapper}>
            <div
              ref={itemsContainerRef}
              onScroll={() => {
                handleScroll();
              }}
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
            {scrollPosition > 0 && (
              <div className={styles.scrollLeft}>
                <ScrollButton direction={"left"} />
              </div>
            )}
            {scrollPosition < scrollWidth && (
              <div className={styles.scrollRight}>
                <ScrollButton direction={"right"} />
              </div>
            )}
          </div> */}
          {/* <div className={styles.scroll}>
            <div className={styles.scrollBar}></div> //todo: сделать рабочий скролл
          </div> */}
        </div>
      </div>
    </section>
  );
};
