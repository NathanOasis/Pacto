import React from "react";
import styles from "./Referees.module.scss";

function OurReferees() {
  return (
    <>
      <div className={styles.box}>
        <img src="arbitro1.jpg" alt="Árbitro nome completo" />
        <span>Nome completo</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor...
        </p>
      </div>

      <div className={styles.box}>
        <img src="arbitro2.jpg" alt="Árbitro nome completo" />
        <span>Nome completo</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor...
        </p>
      </div>

      <div className={styles.box}>
        <img src="arbitro3.jpg" alt="Árbitro nome completo" />
        <span>Nome completo</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor...
        </p>
      </div>
    </>
  );
}

export default OurReferees;
