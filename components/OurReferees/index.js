import React, { useState, useEffect } from "react";

import api from "../../services/api";

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

  const [referees, setReferees] = useState([]);

  useEffect(() => {
    api.get("listReferees").then((response) => {
      setReferees(response.data);
    });
  }, []);

  return (
    <Slider {...settings}>
      {referees.map((referee) => (
        <div className={styles.box}>
          <img
            src={`https://painel.pactolagos.com.br${referee.image}`}
            alt={referee.name}
          />
          <span>{referee.name}</span>
          <p>{referee.bio}</p>
        </div>
      ))}
    </Slider>
  );
}

export default OurReferees;
