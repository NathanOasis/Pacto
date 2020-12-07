import React from "react";

import styles from "../styles/Table.module.scss";

import NextHead from "../components/NextHead";
import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <NextHead title="Tabela" />

      <Header />

      <main className={styles.main}>
        <Title title="Tabela de custos e honorários" />

        <p className={styles.title}>
          1ª Câmara Privada de Conciliação, Mediação e Arbitragem da Região dos
          Lagos doEstado do Rio de Janeiro Ltda.-ME
        </p>

        <div className={styles.wrapperTable}>
          <img src="table.png" alt="Tabela de custos 2020" />
        </div>

        <div className={styles.text}>
          <p>
            Homologação de acordos – 6,5% do valor da causa ou mínimo de R$
            700,00 e máximo de R$ 8.500,00
            <br />
            <strong>OBS: Valores em reais.</strong>
          </p>

          <p>
            1.Caso não exista Cláusula Compromissória prévia ou a Cláusula seja
            do tipo “vazia”, seráenviada uma Notificação-convite, sendo que o
            prosseguimento do procedimento arbitral(e os pagamentos dos itens 2
            a 4) fica vinculado à lavratura do Compromisso Arbitral.Caso exista
            Cláusula Compromissória prévia, será enviada Notificação;
          </p>

          <p className={styles.listTitle}>
            <strong>
              A taxa de administração inclui a realização de audiências na sede
              da 8ª Câmara. Casosejam realizadas audiências em outros locais, as
              partes deverão:
            </strong>
          </p>

          <ul>
            <li>
              <p>
                I. Fornecer local ou arcar com as despesas de aluguel de salas e
                equipamentos,mediante contratação direta com os respectivos
                fornecedores.
              </p>
            </li>

            <li>
              <p>
                II. Antecipar em até 7 dias antes das audiências à 8ª Câmara os
                custos dedeslocamentos, passagens, hospedagem e alimentação que
                sejam incorridos pelo (s)árbitro (s), a partir de planilha
                estimada pela Câmara, os quais serão sujeitos à prestaçãode
                contas e acerto posterior;
              </p>
            </li>

            <li>
              <p>
                III. Antecipar à 8ª Câmara o pagamento da taxa de R$ 700,00
                (setecentos reais) paradeslocamento para fora da cidade do Rio
                de Janeiro e dentro do território nacional e R$200,00 (duzentos
                reais) para deslocamento na cidade do Rio de Janeiro.
              </p>
            </li>

            <li>
              <p>
                IV. Audiências fora do território nacional, taxa de deslocamento
                sob consulta.
              </p>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}
