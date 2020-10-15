import React, { useState, useEffect } from "react";

import api from "../../services/api";

import styles from "./Footer.module.scss";

function Footer() {
  const [settings, setSettings] = useState([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notify, setNotify] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await api
      .post("contacts", {
        name,
        phone,
        email,
        message,
      })
      .then(() => {
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        setNotify("Contato enviado com sucesso!");

        setTimeout(() => {
          setNotify("");
        }, 2000);
      });
  }

  useEffect(() => {
    api.get("settings").then((response) => {
      setSettings(response.data);
    });
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.column} id="#contato">
          <span className={styles.title}>Contato</span>
          <ul>
            <li>
              <span>
                <img src="/icon-mail.svg" alt="Ícone e-mail" />
                {settings.email_contact}
              </span>
            </li>
            <li>
              <span>
                <img src="/icon-phone.svg" alt="Ícone telefone" />
                {settings.phone}
              </span>
            </li>
            <li className={styles.social}>
              <a href={settings.facebook}>
                <img src="/icon-face.svg" alt="Ícone Facebook" />
              </a>
              <a href={settings.instagram}>
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

          <form onSubmit={handleSubmit}>
            <label>
              Nome
              <input
                type="text"
                placeholder="nome:"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Telefone
              <input
                type="number"
                placeholder="telefone:"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                placeholder="email:"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Mensagem
              <textarea
                placeholder="mensagem:"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>

            <input type="submit" value="Enviar" />
          </form>
          <p>{notify}</p>
        </div>
        <div className={styles.column}>
          <span className={styles.title}>Onde estamos</span>
          <div className={styles.map}>
            <iframe
              title="mapa da nossa localização"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5649435341356!2d-42.541093184488325!3d-22.294464185326575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x978a64bcfc7b0f%3A0x2792ddf2aa454152!2sAv.%20Conselheiro%20J%C3%BAlius%20Arp%2C%20Nova%20Friburgo%20-%20RJ%2C%2028623-000!5e0!3m2!1spt-BR!2sbr!4v1598922010295!5m2!1spt-BR!2sbr"
            ></iframe>
          </div>
        </div>
      </div>
      <div className={styles.copy}>Copyright © 2020 PACTO</div>

      <div className={styles.dev}>
        <a
          href="https://www.agenciaoasis.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/oasis.svg" alt="Desenvolvimento Agência Oásis" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
