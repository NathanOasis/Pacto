import React from "react";
import styles from "./Notices.module.scss";

import Slider from "react-slick";

function Notices() {
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
        <img src="notice-image.png" alt="Notícia" />
        <span>
          <strong>12 Jun | </strong>Título da notícia
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor...
        </p>
        <a href="#">Matéria completa</a>
      </div>

      <div className={styles.box}>
        <img src="notice-image.png" alt="Notícia" />
        <span>
          <strong>12 Jun | </strong>Título da notícia
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor...
        </p>
        <a href="#">Matéria completa</a>
      </div>

      <div className={styles.box}>
        <img src="notice-image.png" alt="Notícia" />
        <span>
          <strong>12 Jun | </strong>Título da notícia
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor...
        </p>
        <a href="#">Matéria completa</a>
      </div>
    </Slider>
  );
}

export default Notices;
