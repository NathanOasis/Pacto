import React, { useState, useEffect } from "react";

import api from "../services/api";

import styles from "../styles/Actions.module.scss";

import NextHead from "../components/NextHead";
import Header from "../components/Header";
import Title from "../components/Title";
import Button from "../components/Button";
import Footer from "../components/Footer";

export default function Actions() {
  const [method, setMethod] = useState("");
  const [commitment_clause, setCommitmentclause] = useState("");
  const [name_author, setNameAuthor] = useState("");
  const [cpf_author, setCpfAuthor] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [zip_code, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [cel_phone, setCelPhone] = useState("");
  const [email, setEmail] = useState("");
  const [skype, setSkype] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await api
      .post("actions", {
        method,
        commitment_clause,
        name_author,
        cpf_author,
        name,
        cpf,
        zip_code,
        address,
        district,
        city,
        state,
        phone,
        cel_phone,
        email,
        skype,
        description,
      })
      .then(() => console.log("enviado"));
  }

  return (
    <>
      <NextHead title="Cadastro de ações - Pacto" />

      <Header />

      <main className={styles.main}>
        <Title title="Cadastro de ações" />
        <p className={styles.description}>
          Selecione o método de solução de litígios desejado
        </p>

        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <input
                type="radio"
                id="mediacao"
                name="radioActionMethod"
                value="Mediação"
                onChange={(e) => {
                  setMethod(e.target.value);
                }}
              />
              <label htmlFor="mediacao">Mediação</label>
            </li>
            <li>
              <input
                type="radio"
                id="conciliacao"
                name="radioActionMethod"
                value="Conciliação"
                onChange={(e) => {
                  setMethod(e.target.value);
                }}
              />
              <label htmlFor="conciliacao">Conciliação</label>
            </li>
            <li>
              <input
                type="radio"
                id="arbitragem"
                name="radioActionMethod"
                value="Arbitragem"
                onChange={(e) => {
                  setMethod(e.target.value);
                }}
              />
              <label htmlFor="arbitragem">Arbitragem</label>
            </li>
            <li>
              <input
                type="radio"
                id="dontknow"
                name="radioActionMethod"
                value="Não sei o método para o meu caso"
                onChange={(e) => {
                  setMethod(e.target.value);
                }}
              />
              <label htmlFor="dontknow">
                Não sei qual o melhor método para o meu caso
              </label>
            </li>

            <li className={styles.text}>
              <p>Há Cláusula Compromissória elegendo a 8ª Câmara?</p>
            </li>

            <ul className={styles.radioGroup}>
              <li>
                <input
                  type="radio"
                  id="clausulaYes"
                  name="radioAction"
                  value="Sim"
                  onChange={(e) => {
                    setCommitmentclause(e.target.value);
                  }}
                />
                <label htmlFor="clausulaYes">Sim</label>
              </li>

              <li>
                <input
                  type="radio"
                  id="clausulaNo"
                  name="radioAction"
                  value="Não"
                  onChange={(e) => {
                    setCommitmentclause(e.target.value);
                  }}
                />
                <label htmlFor="clausulaNo">Não</label>
              </li>
            </ul>
          </ul>

          <div className={`${styles.formGroup} ${styles.formFlex}`}>
            <label>
              Nome do requerente / autor
              <input
                type="text"
                placeholder="Nome do requerente / autor"
                value={name_author}
                onChange={(e) => setNameAuthor(e.target.value)}
              />
            </label>
            <label>
              CNPJ/CPF
              <input
                type="number"
                placeholder="CNPJ/CPF"
                value={cpf_author}
                onChange={(e) => setCpfAuthor(e.target.value)}
              />
            </label>
          </div>

          <div className={`${styles.formGroup} ${styles.formColumn}`}>
            <label>
              Nome completo do Responsável legal
              <input
                type="text"
                placeholder="Nome completo do Responsável legal"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              CPF do responsável legal
              <input
                type="number"
                placeholder="CPF do responsável legal"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </label>
            <label>
              CEP
              <input
                type="text"
                placeholder="CEP"
                value={zip_code}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </label>
            <label>
              Endereço
              <input
                type="text"
                placeholder="Endereço"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
            <label>
              Bairro
              <input
                type="text"
                placeholder="Bairro"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
            </label>
            <label>
              Cidade
              <input
                type="text"
                placeholder="Cidade"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
            <label>
              Estado
              <input
                type="text"
                placeholder="Estado"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </label>
            <label>
              Telefone fixo com DDD
              <input
                type="text"
                placeholder="Telefone fixo com DDD"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
            <label>
              Telefone celular com DDD
              <input
                type="text"
                placeholder="Telefone celular com DDD"
                value={cel_phone}
                onChange={(e) => setCelPhone(e.target.value)}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Skype
              <input
                type="text"
                placeholder="Skype"
                value={skype}
                onChange={(e) => setSkype(e.target.value)}
              />
            </label>
            <label>
              Resumo do litígio com datas, e o que requer
              <textarea
                name="resum"
                id="resum"
                placeholder="Resumo do litígio com datas, e o que requer"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </label>
          </div>

          <input type="submit" value="Prosseguir" />
        </form>
      </main>

      <Footer />
    </>
  );
}
