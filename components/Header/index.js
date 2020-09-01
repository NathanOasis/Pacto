import React, { useState } from "react";
import styles from "./Header.module.scss";

function Header() {
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
        <div
          className={`${styles.menu} ${menuBurger && styles.menuActive}`}
          onClick={handleBurger}
        >
          <span className={`${styles.menuBurger} ${styles.menuTop}`}></span>
          <span className={`${styles.menuBurger} ${styles.menuMiddle}`}></span>
          <span className={`${styles.menuBurger} ${styles.menuBottom}`}></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
