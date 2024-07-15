import React from "react";

import styles from "./Trending.module.scss";
import ProductItem from "@/entities/product/ui/ProductItem/ProductItem";

import ArrowIcon from "@/assets/icons/arrow-right.svg";

const Trending = () => {
  const scrollStepWidth = 400;

  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [scrollWidth, setScrollWidth] = React.useState(0);

  const itemsContainerRef = React.useRef(null);

  React.useEffect(() => {
    if (itemsContainerRef) {
      setScrollWidth(
        itemsContainerRef.current.scrollWidth -
          itemsContainerRef.current.offsetWidth
      );
    }
  }, []);

  function handleButtonScroll(scrollAmount: number) {
    const newScrollPosition = scrollPosition + scrollAmount;
    if (newScrollPosition < 0) {
      setScrollPosition(0);
    } else if (newScrollPosition > scrollWidth) {
      setScrollPosition(scrollWidth);
    } else {
      setScrollPosition(newScrollPosition);
    }
    itemsContainerRef.current.scrollLeft = newScrollPosition;
  }

  function handleScroll() {
    setScrollPosition(itemsContainerRef.current.scrollLeft);
  }

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
          <div className={styles.itemsWrapper}>
            <div
              ref={itemsContainerRef}
              onScroll={() => {
                handleScroll();
              }}
              className={styles.items}
            >
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
            {scrollPosition > 0 && (
              <div
                onClick={() => {
                  handleButtonScroll(-scrollStepWidth);
                }}
                className={[styles.moveToLeft, styles.move].join(" ")}
              >
                <ArrowIcon className={styles.arrow} />
              </div>
            )}
            {scrollPosition < scrollWidth && (
              <div
                onClick={() => {
                  handleButtonScroll(scrollStepWidth);
                }}
                className={[styles.moveToRight, styles.move].join(" ")}
              >
                <ArrowIcon className={styles.arrow} />
              </div>
            )}
          </div>
          {/* <div className={styles.scroll}>
            <div className={styles.scrollBar}></div> //todo: сделать рабочий скролл
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Trending;
