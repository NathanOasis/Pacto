import React, { useState, useEffect } from "react";
import Link from "next/link";

import { format } from "date-fns";

import api from "../../services/api";

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

  const [notices, setNotices] = useState([]);

  useEffect(() => {
    api.get("listNews").then((response) => {
      setNotices(response.data);
    });
  }, []);

  return (
    <Slider {...settings}>
      {notices.map((notice) => (
        <Link href={`/noticia/${notice.id}`}>
          <a>
            <div className={styles.box}>
              <img
                src={`https://painel.pactolagos.com.br/storage/${notice.main_image}`}
                alt={notice.title}
              />
              <span>
                {notice.title}
                <strong>
                  <strong>
                    {format(new Date(notice.created_at), "dd/MM/yyyy")}
                  </strong>{" "}
                </strong>
              </span>
            </div>
          </a>
        </Link>
      ))}
    </Slider>
  );
}

export default Notices;
