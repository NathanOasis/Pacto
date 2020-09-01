import React from "react";

import styles from "../../styles/Notice.module.scss";

import NextHead from "../../components/NextHead";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Footer from "../../components/Footer";

function Notice() {
  return (
    <>
      <NextHead title="Notícias - Pacto" />

      <Header />

      <main className={styles.main}>
        <div className={styles.wrapperTitle}>
          <img src="../notice-icon.svg" alt="Ícone de notícias" />
          <Title title="Notícias" />
        </div>

        <div className={styles.box}>
          <img src="../notice.jpg" alt="Imagem da notícia" />
          <span className={styles.date}>12 Jun</span>
          <span className={styles.title}>Título da Notícia</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Notice;