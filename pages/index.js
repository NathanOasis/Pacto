import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

import Banner from "../components/Banner";
import Button from "../components/Button";
import OurReferees from "../components/OurReferees";

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
        <div className={styles.bannerTop}>
          <Banner />
        </div>

        <div className={styles.containerAbout}>
          <div className={styles.wrapper}>
            <img src="icon-about.svg" alt="Ícone quem somos" />
            <span className={styles.title}>Quem somos</span>

            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
            </p>

            <Button text="Ver mais" className={styles.button} />
          </div>
        </div>

        <div className={styles.containerReferees}>
          <OurReferees />
        </div>
      </main>
    </>
  );
}
