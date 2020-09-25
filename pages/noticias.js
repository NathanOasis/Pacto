import React, { useState, useEffect } from "react";
import api from "../services/api";
import Link from "next/link";
import { format } from "date-fns";

import styles from "../styles/Notices.module.scss";

import NextHead from "../components/NextHead";
import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";

export default function Notices() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    api.get("listNews").then((response) => {
      setNotices(response.data);
    });
  }, []);

  return (
    <>
      <NextHead title="Notícias - Pacto" />

      <Header />

      <main className={styles.main}>
        <div className={styles.wrapperTitle}>
          <img src="notice-icon.svg" alt="Ícone de notícias" />
          <Title title="Notícias" />
        </div>

        {notices.map((notice) => (
          <Link href={`/noticia/${notice.id}`}>
            <a>
              <div className={styles.box}>
                <img
                  src={`https://painel.pactolagos.com.br/storage/${notice.main_image}`}
                  alt={notice.title}
                />
                <div className={styles.wrapper}>
                  <span className={styles.date}>
                    {format(new Date(notice.created_at), "dd/MM/yyyy")}
                  </span>
                  <span className={styles.title}>{notice.title}</span>
                  <p className={styles.description}>{notice.summary_text}</p>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </main>

      <Footer />
    </>
  );
}
