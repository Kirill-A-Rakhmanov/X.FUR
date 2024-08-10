import React from "react";

import styles from "./CollectionGallery.module.scss";
import { CollectionPopup } from "@/widgets/widgets";
import { useAppSelector } from "@/app/store/hooks";
import { selectCollection, tCollection } from "@/entities/entities";

export const CollectionGallery = () => {
  const { items } = useAppSelector(selectCollection);
  const [activeCollection, setActiveCollection] = React.useState<
    tCollection | undefined
  >();

  const handleClick = (collection: tCollection) => {
    setActiveCollection(collection);
  };

  const clearCollection = () => {
    setActiveCollection(undefined);
  };

  return (
    <>
      <div className={styles.gallery}>
        {items.slice(-6).map((obj, index) => (
          <button
            onClick={() => handleClick(obj)}
            key={index}
            className={styles.image}
          >
            <img src={obj.image} alt={obj.collection} />
          </button>
        ))}
      </div>
      <CollectionPopup
        actionOnClose={clearCollection}
        collection={activeCollection}
      />
    </>
  );
};
