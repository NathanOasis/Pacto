import React, { useState, useEffect } from "react";
import api from "../../services/api.js";

import { format } from "date-fns";

import Link from "next/link";

import styles from "../../styles/Notice.module.scss";

import NextHead from "../../components/NextHead";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Footer from "../../components/Footer";

export default function Notice({ notice }) {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    api.get("listNews").then((response) => {
      setNotices(response.data);
    });
  }, []);

  return (
    <>
      <NextHead title="Notícia - Pacto" />

      <Header />

      <main className={styles.main}>
        <div className={styles.wrapperTitle}>
          <img src="/notice-icon.svg" alt="Ícone de notícias" />
          <Title title="Notícias" />
        </div>

        <div className={styles.wrapperImage}>
          <span className={styles.date}>
            {format(new Date(notice.created_at), "dd/MM/yyyy")}
          </span>
          <span className={styles.title}>{notice.title}</span>
        </div>

        <p className={styles.text}>{notice.text}</p>

        <Title title="Confira também" className={styles.textSugestion} />

        <div className={styles.wrapper}>
          {notices.slice(0, 3).map((notice) => (
            <Link href={`/noticia/${notice.id}`}>
              <a>
                <div className={styles.box}>
                  <img
                    src={`https://painel.pactolagos.com.br/storage/${notice.main_image}`}
                    alt={notice.title}
                  />
                  <span className={styles.date}>
                    {format(new Date(notice.created_at), "dd/MM/yyyy")}
                  </span>
                  <span className={styles.title}>{notice.title}</span>
                  <p className={styles.description}>{notice.summary_text}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://painel.pactolagos.com.br/api/news/${id}`, {
    method: "get",
    headers: new Headers({
      Authorization: "Bearer jSEmdEgfi9xxoWoqSzUnDo46au0oxW9y1SdiBUOk",
      "content-type": "application/json",
    }),
  });
  const data = await res.json();

  return {
    props: {
      notice: data,
    },
  };
}
