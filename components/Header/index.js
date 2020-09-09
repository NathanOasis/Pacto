import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Header.module.scss";

function Header() {
  const router = useRouter();

  const [menuBurger, setActiveMenuBurger] = useState(false);

  function handleBurger() {
    setActiveMenuBurger(!menuBurger);
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <a href="/">
          <img className={styles.logo} src="/logo.svg" alt="Logo Pacto" />
        </a>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">
                <a className={`${router.pathname == "/" ? styles.active : ""}`}>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/sobre">
                <a
                  className={`${
                    router.pathname == "/sobre" ? styles.active : ""
                  }`}
                >
                  Quem Somos
                </a>
              </Link>
            </li>
            <li>
              <Link href="/cadastro-acoes">
                <a
                  className={`${
                    router.pathname == "/cadastro-acoes" ? styles.active : ""
                  }`}
                >
                  Cadastro de ações
                </a>
              </Link>
            </li>
            <li>
              <Link href="/sobre-legislacao">
                <a
                  className={`${
                    router.pathname == "/sobre-legislacao" ? styles.active : ""
                  }`}
                >
                  Legislacao
                </a>
              </Link>
            </li>
            <li>
              <Link href="/noticias">
                <a
                  className={`${
                    router.pathname == "/noticias" ? styles.active : ""
                  }`}
                >
                  Notícias
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        <div
          className={`${styles.menu} ${menuBurger && styles.menuActive}`}
          onClick={handleBurger}
        >
          <span className={`${styles.menuBurger} ${styles.menuTop}`}></span>
          <span className={`${styles.menuBurger} ${styles.menuMiddle}`}></span>
          <span className={`${styles.menuBurger} ${styles.menuBottom}`}></span>
        </div>
      </div>

      <div className={`${styles.menuMobile} ${menuBurger && styles.active}`}>
        <ul className={styles.list}>
          <li>
            <Link href="/">
              <a>Início</a>
            </Link>
          </li>
          <li>
            <Link href="/sobre">
              <a>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="/sobre-legislacao">
              <a>Sobre a legislacao</a>
            </Link>
          </li>
          <li>
            <Link href="/noticias">
              <a>Notícias</a>
            </Link>
          </li>
          <li>
            <Link href="/cadastro-acoes">
              <a>Cadastro de ações</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
