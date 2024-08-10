import React from "react";

import styles from "./CollectionPopup.module.scss";
import { tCollection } from "@/entities/entities";
import CloseIcon from "@/assets/icons/close.svg";

type tProps = {
  collection: tCollection;
  actionOnClose: () => void;
};

export const CollectionPopup = ({ collection, actionOnClose }: tProps) => {
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    if (!collection) return;

    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";

    dialogRef.current.addEventListener("close", closePopup);

    return () => dialogRef.current.removeEventListener("close", closePopup);
  }, [collection]);

  const closePopup = () => {
    dialogRef.current?.close();
    document.body.style.overflow = "";
    actionOnClose();
  };

  return (
    <dialog ref={dialogRef} className={styles.backdrop}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.header}>
            More ideas and inspiration from your great value furniture store
          </div>
          <CloseIcon onClick={() => closePopup()} className={styles.close} />
        </div>
        <div className={styles.content}>
          <div className={styles.image}>
            <img src={collection?.image} alt={collection?.collection} />
          </div>
          <div className={styles.list}>
            {collection?.items.map((article, index) => (
              <div>{article}</div>
            ))}
          </div>
        </div>
      </div>
    </dialog>
  );
};
