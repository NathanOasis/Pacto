import React from "react";
import styles from "../styles/Home.module.scss";

import NextHead from "../components/NextHead";
import Header from "../components/Header";
import Banner from "../components/Banner";
import BoxText from "../components/BoxText";
import Button from "../components/Button";
import OurReferees from "../components/OurReferees";
import Title from "../components/Title";
import Notices from "../components/Notices";

export default function Home() {
  return (
    <>
      <NextHead title="Home - Pacto" />

      <Header />

      <main className={styles.main}>
        <div className={styles.bannerTop}>
          <Banner />
        </div>

        <BoxText
          className={styles.boxTextTop}
          icon={<img src="icon-about.svg" alt="Ícone quem somos" />}
          title="Quem Somos"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu"
        />

        <div className={styles.containerReferees}>
          <OurReferees />
          <Button text="Ver todos" className={styles.buttonReferees} />
        </div>

        <div className={styles.containerActions}>
          <Title title="Cadastro de Ações" />
          <ul>
            <li>
              <input type="radio" id="mediacao" name="radioAction" />
              <label htmlFor="mediacao">Mediação</label>
            </li>
            <li>
              <input type="radio" id="conciliacao" name="radioAction" />
              <label htmlFor="conciliacao">Conciliação</label>
            </li>
            <li>
              <input type="radio" id="arbitragem" name="radioAction" />
              <label htmlFor="arbitragem">Arbitragem</label>
            </li>
            <li>
              <input type="radio" id="dontknow" name="radioAction" />
              <label htmlFor="dontknow">
                Não sei qual o melhor método para o meu caso
              </label>
            </li>
          </ul>
          <Button text="Prosseguir" className={styles.buttonAction} />
        </div>

        <div className={styles.containerNotices}>
          <div className={styles.wrapperTitle}>
            <img src="notice-icon.svg" alt="Ícone de notícias" />
            <Title title="Notícias" />
          </div>

          <div className={styles.wrapperNotices}>
            <Notices />
          </div>

          <Button text="Ver todas" className={styles.buttonNotice} />

          <BoxText
            className={styles.boxTextBot}
            title="Legislação sobre Câmara de Arbitragem"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu"
          />
        </div>
      </main>
    </>
  );
}
