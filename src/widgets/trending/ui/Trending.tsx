import React from "react";

import styles from "./Trending.module.scss";
import ProductItem from "@/entities/product/ui/ProductItem/ProductItem";

import ArrowIcon from "@/assets/icons/arrow-right.svg";

const Trending = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const itemsContainerRef = React.useRef(null);
  const itemsScrollLength = React.useRef(0);
  const throttleInProgress = React.useRef(null);

  function handleThrottleScroll() {
    if (throttleInProgress.current) {
      return;
    }
    throttleInProgress.current = true;
    setTimeout(() => {
      const { scrollLeft } = itemsContainerRef.current;
      setScrollPosition((scrollLeft / itemsScrollLength.current) * 100);
      throttleInProgress.current = false;
    }, 10);
  }

  React.useEffect(() => {
    if (itemsContainerRef) {
      const scrollWidth = itemsContainerRef.current.scrollWidth;
      const offsetWidth = itemsContainerRef.current.offsetWidth;
      itemsScrollLength.current = scrollWidth - offsetWidth;
    }
  }, []);

  return (
    <section className={styles.trending}>
      <div className={[styles.container && "", "_container"].join(" ")}>
        <div className={styles.content}>
          <h2 className={styles.header}>Trending now</h2>
          <div className={styles.itemsWrapper}>
            <div
              ref={itemsContainerRef}
              // onScroll={handleScroll}
              onScroll={handleThrottleScroll}
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
              <div className={[styles.moveToLeft, styles.move].join(" ")}>
                <ArrowIcon className={styles.arrow} />
              </div>
            )}
            {scrollPosition < 100 && (
              <div className={[styles.moveToRight, styles.move].join(" ")}>
                <ArrowIcon className={styles.arrow} />
              </div>
            )}
          </div>
          <div className={styles.scroll}>
            <div className={styles.scrollBar}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
