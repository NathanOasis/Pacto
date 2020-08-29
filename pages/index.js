import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [menuBurger, setActiveMenuBurger] = useState(false);

  function handleBurger() {
    setActiveMenuBurger(!menuBurger);
  }
  return (
    <>
      <Head>
        <title>Home - Pacto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.wrapper}>
          <a href="/">
            <img className={styles.logo} src="logo.svg" alt="Logo Pacto" />
          </a>
          <div
            className={`${styles.menu} ${menuBurger && styles.menuActive}`}
            onClick={handleBurger}
          >
            <span className={`${styles.menuBurger} ${styles.menuTop}`}></span>
            <span
              className={`${styles.menuBurger} ${styles.menuMiddle}`}
            ></span>
            <span
              className={`${styles.menuBurger} ${styles.menuBottom}`}
            ></span>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
