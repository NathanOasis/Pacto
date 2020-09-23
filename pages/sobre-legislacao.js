import React, { useState, useEffect } from "react";

import api from "../services/api";

import styles from "../styles/AboutLegis.module.scss";

import NextHead from "../components/NextHead";
import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";

export default function About() {
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    api.get("settings").then((response) => {
      setSettings(response.data);
    });
  }, []);

  return (
    <>
      <NextHead title="Sobre a Legislação" />

      <Header />

      <main className={styles.main}>
        <Title title="Legislação sobre Câmara de Arbitragem" />
        <div className={styles.wrapper}>
          <p>{settings.legislation}</p>
        </div>
      </main>

      <Footer />
    </>
  );
}
