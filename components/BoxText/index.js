import React from "react";
import styles from "./BoxText.module.scss";

function BoxText({ className, title, description, icon, children }) {
  return (
    <div className={`${styles.containerAbout} ${className}`}>
      <div className={styles.wrapper}>
        {icon}
        <span className={styles.title}>{title}</span>

        <p className={styles.description}>{description}</p>

        {children}
      </div>
    </div>
  );
}

export default BoxText;
