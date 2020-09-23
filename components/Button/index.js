import React from "react";
import styles from "./Button.module.scss";

function Button({ text, className }) {
  return <a className={`${styles.button} ${className}`}>{text}</a>;
}

export default Button;
