import React from "react";
import styles from "./Title.module.scss";

function Title({ title, className }) {
  return <span className={`${styles.title} ${className}`}>{title}</span>;
}

export default Title;
