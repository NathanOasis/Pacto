import React from "react";
import styles from "./BoxText.module.scss";
import Button from "../Button";

function BoxText({ className, title, description, icon }) {
  return (
    <div className={`${styles.containerAbout} ${className}`}>
      <div className={styles.wrapper}>
        {icon}
        <span className={styles.title}>{title}</span>

        <p className={styles.description}>{description}</p>

        <Button text="Ver mais" className={styles.button} />
      </div>
    </div>
  );
}

export default BoxText;
