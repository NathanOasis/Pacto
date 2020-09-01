import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <span className={styles.title}>Contato</span>
          <ul>
            <li>
              <span>
                <img src="/icon-mail.svg" alt="Ícone e-mail" />
                contato@pacto.com.br
              </span>
            </li>
            <li>
              <span>
                <img src="/icon-phone.svg" alt="Ícone telefone" />
                22 9999-9999
              </span>
            </li>
            <li className={styles.social}>
              <a href="#">
                <img src="/icon-face.svg" alt="Ícone Facebook" />
              </a>
              <a href="#">
                <img src="/icon-insta.svg" alt="Ícone Instagram" />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <span className={styles.title}>Fale Conosco</span>
          <span className={styles.description}>
            Selecione o método de solução de litígios desejado{" "}
          </span>

          <form>
            <input type="text" placeholder="nome:" />
            <input type="number" placeholder="telefone:" />
            <input type="email" placeholder="email:" />
            <textarea placeholder="mensagem:" />

            <input type="submit" value="Enviar" />
          </form>
        </div>
        <div className={styles.column}>
          <span className={styles.title}>Onde estamos</span>
          <div className={styles.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5649435341356!2d-42.541093184488325!3d-22.294464185326575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x978a64bcfc7b0f%3A0x2792ddf2aa454152!2sAv.%20Conselheiro%20J%C3%BAlius%20Arp%2C%20Nova%20Friburgo%20-%20RJ%2C%2028623-000!5e0!3m2!1spt-BR!2sbr!4v1598922010295!5m2!1spt-BR!2sbr"></iframe>
          </div>
        </div>

        <div className={styles.copy}>Copyright © 2020 PACTO</div>

        <div className={styles.dev}>
          <a
            href="https://www.agenciaoasis.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Desenvolvimento
            <img src="/oasis.svg" alt="Desenvolvimento Agência Oásis" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
