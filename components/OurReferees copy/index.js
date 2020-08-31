import React from "react";
import styles from "./Referees.module.scss";

import Slider from "react-slick";

function OurReferees() {
  var settings = {
    dots: false,
    // autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 2.3,
    slidesToScroll: 1.2,
  };

  return (
    <Slider {...settings}>
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
    </Slider>
  );
}

export default OurReferees;
