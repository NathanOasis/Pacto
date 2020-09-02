import React from "react";
import styles from "./Notices.module.scss";

function Notices() {
  return (
    <>
      <div className={styles.box}>
        <img src="notice-image.png" alt="Notícia" />
        <span>
          Título da notícia
          <strong>12 Jun </strong>
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor...
        </p>
      </div>

      <div className={styles.box}>
        <img src="notice-image.png" alt="Notícia" />
        <span>
          Título da notícia
          <strong>12 Jun </strong>
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor...
        </p>
      </div>

      <div className={styles.box}>
        <img src="notice-image.png" alt="Notícia" />
        <span>
          Título da notícia
          <strong>12 Jun </strong>
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor...
        </p>
      </div>
    </>
  );
}

export default Notices;
