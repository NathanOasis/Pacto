import React from "react";
import Link from "next/link";

import styles from "../../styles/Notice.module.scss";

import NextHead from "../../components/NextHead";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Footer from "../../components/Footer";

function Notice() {
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
          <span className={styles.date}>12 Jun</span>
          <span className={styles.title}>Título da Notícia</span>
        </div>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
        </p>

        <Title title="Confira também" className={styles.textSugestion} />

        <Link href="/">
          <div className={styles.box}>
            <img src="/notice.jpg" alt="Imagem da notícia" />
            <span className={styles.date}>12 Jun</span>
            <span className={styles.title}>Título da Notícia</span>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </Link>
      </main>

      <Footer />
    </>
  );
}

export default Notice;
