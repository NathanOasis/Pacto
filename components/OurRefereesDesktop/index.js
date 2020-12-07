import React, { useState, useEffect } from "react";

import api from "../../services/api";

import styles from "./Referees.module.scss";

function OurReferees({ numberReferees }) {
  const [referees, setReferees] = useState([]);

  useEffect(() => {
    api.get("listReferees").then((response) => {
      setReferees(response.data);
    });
  }, []);

  return (
    <>
      {/* {referees.slice(0, numberReferees).map((referee) => (
        <div className={styles.box}>
          <img
            src={`https://painel.pactolagos.com.br${referee.image}`}
            alt={referee.name}
          />
          <span>{referee.name}</span>
          <p>{referee.bio}</p>
        </div>
      ))} */}

      <div className={styles.box}>
        <img src="/juliana.jpg" alt="Juliana Aguiar" />
        <span>Juliana Aguiar</span>
        <p>
          Advogada especializada em Processo Civil e Advocacia Extrajudicial,
          com experiência em assessoria, consultoria e contencioso nas áreas
          cível, família, consumidor, locação, contratos e legalização de
          imóveis, sempre buscando a resolução de conflitos através de
          conciliação e mediação.
        </p>
      </div>

      <div className={styles.box}>
        <img src="/eduardo.jpg" alt="Eduardo Brez" />
        <span>Eduardo Brez</span>
        <p>
          Profissional com experiência em assessoria, consultoria e contencioso
          nas áreas cível, família, consumidor, locação e contratos em geral,
          sempre buscando a resolução de conflitos através da conciliação.
        </p>
      </div>

      <div className={styles.box}>
        <img src="/renata.jpg" alt="Renata Rodrigues" />
        <span>Renata Rodrigues</span>
        <p>
          Possui experiência nas áreas Trabalhista, Contratual e Consumerista,
          nos ramos da consultoria jurídica, na advocacia preventiva, visando
          sempre a melhor técnica jurídica para que o cliente atue de forma
          segura, com ênfase na mediação de conflitos, sempre que possível, e na
          Advocacia Contenciosa.
        </p>
      </div>

      <div className={styles.box}>
        <img src="/toni.jpg" alt="José Antônio Pereira" />
        <span>José Antônio Pereira</span>
        <p>
          Possui treinamento em Inteligência Emocional no Trabalho, Formação em
          Coaching Executive Buzines, Leader Training Extreme Survivor –
          Instituto Tânia Zambon (RS).
        </p>
      </div>
    </>
  );
}

export default OurReferees;
