import React from "react";

import styles from "../styles/Actions.module.scss";

import NextHead from "../components/NextHead";
import Header from "../components/Header";
import Title from "../components/Title";
import Button from "../components/Button";
import Footer from "../components/Footer";

export default function Actions() {
  return (
    <>
      <NextHead title="Cadastro de ações - Pacto" />

      <Header />

      <main className={styles.main}>
        <Title title="Cadastro de ações" />
        <p className={styles.description}>
          Selecione o método de solução de litígios desejado
        </p>

        <form action="">
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

            <p className={styles.text}>
              Há Cláusula Compromissória elegendo a 8ª Câmara?
            </p>

            <div className={styles.radioGroup}>
              <li>
                <input type="radio" id="clausulaYes" name="radioAction" />
                <label htmlFor="clausulaYes">Sim</label>
              </li>

              <li>
                <input type="radio" id="clausulaNo" name="radioAction" />
                <label htmlFor="clausulaNo">Não</label>
              </li>
            </div>
          </ul>

          <div className={styles.formGroup}>
            <input type="text" placeholder="Nome do requerente / autor" />
            <input type="number" placeholder="CNPJ/CPF" />
          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder="Nome completo do Responsável legal"
            />
            <input type="number" placeholder="CPF do responsável legal" />
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Endereço" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="Estado" />
            <input type="text" placeholder="Telefone fixo com DDD" />
            <input type="text" placeholder="Telefone celular com DDD" />
            <input type="email" placeholder="E-mail" />
            <input type="text" placeholder="Skype" />
            <textarea
              name="resum"
              id="resum"
              placeholder="Resumo do litígio com datas, e o que requer"
            ></textarea>
          </div>

          <Button text="Prosseguir" className={styles.buttonAction} />
        </form>
      </main>

      <Footer />
    </>
  );
}
