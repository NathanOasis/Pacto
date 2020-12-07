import React, { useState, useEffect } from "react";

import api from "../services/api";

import styles from "../styles/About.module.scss";

import NextHead from "../components/NextHead";
import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";

export default function About() {
  const [settings, setSettings] = useState([]);
  const [referees, setReferees] = useState([]);

  useEffect(() => {
    api.get("settings").then((response) => {
      setSettings(response.data);
    });
  }, []);

  useEffect(() => {
    api.get("listReferees").then((response) => {
      setReferees(response.data);
    });
  }, []);

  return (
    <>
      <NextHead title="Sobre a Pacto" />

      <Header />

      <main className={styles.main}>
        <div className={styles.wrapperTitle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="85.001"
            height="54.999"
            viewBox="0 0 85.001 54.999"
          >
            <path
              id="Forma_1"
              data-name="Forma 1"
              d="M409.51,843.74V830.087a2.847,2.847,0,0,0-.091-.709l-1.938,1.959a2.772,2.772,0,0,0-.8,1.964V843.74a1.245,1.245,0,1,1-2.49,0V833.3a5.292,5.292,0,0,1,1.534-3.745l2.046-2.068-6.743-3.408a3.95,3.95,0,0,1-.617-.39l-3.045,3.078V843.74a1.245,1.245,0,1,1-2.49,0V826.768l-3.044-3.078a3.953,3.953,0,0,1-.617.39,1.224,1.224,0,0,1-.556.133,1.242,1.242,0,0,1-1.114-.7,1.266,1.266,0,0,1,.556-1.689,1.425,1.425,0,0,0,.784-1.281v-1.785a8.005,8.005,0,0,1-2.662-5.971v-1.435l-.085,0a1.252,1.252,0,0,1-1.246-1.259v-2.691a7.954,7.954,0,0,1,7.9-7.987h2.662a7.953,7.953,0,0,1,7.9,7.987V810.1a1.252,1.252,0,0,1-1.245,1.259h-.086v1.434a8.007,8.007,0,0,1-2.661,5.971v1.785a1.425,1.425,0,0,0,.782,1.281l6.969,3.523a5.274,5.274,0,0,1,2.9,4.737V843.74a1.245,1.245,0,1,1-2.49,0Zm-16.142-23.194a4.046,4.046,0,0,1-.13,1.011l2.877,2.909,2.877-2.909a4.006,4.006,0,0,1-.13-1.011v-.268a7.8,7.8,0,0,1-5.495,0Zm-2.661-9.786v2.03a5.409,5.409,0,1,0,10.818,0v-1.563a21.932,21.932,0,0,1-7.9-2.27A10.523,10.523,0,0,1,390.707,810.76Zm3.438-4.4a18.88,18.88,0,0,0,8.71,2.446v-1.4a5.445,5.445,0,0,0-5.408-5.469h-2.662a5.445,5.445,0,0,0-5.409,5.469v1.174a8.148,8.148,0,0,0,3.2-2.064,1.235,1.235,0,0,1,1.571-.158Zm-8.59,37.381V827.053a4.06,4.06,0,0,0-.025-.433l-3.334,3.371a2.775,2.775,0,0,0-.8,1.965V843.74a1.245,1.245,0,1,1-2.49,0V831.956a5.292,5.292,0,0,1,1.534-3.745l3.974-4.018a4.048,4.048,0,0,0-1.276-.907l-7.113-3.2-5.276,5.334V843.74a1.245,1.245,0,1,1-2.489,0V825.422l-5.276-5.334-7.113,3.2a4.074,4.074,0,0,0-1.277.906l3.974,4.019a5.289,5.289,0,0,1,1.534,3.745V843.74a1.245,1.245,0,1,1-2.49,0V831.956a2.777,2.777,0,0,0-.8-1.965l-3.334-3.371a4.06,4.06,0,0,0-.026.433V843.74a1.245,1.245,0,1,1-2.489,0V827.053a6.65,6.65,0,0,1,3.9-6.07l7.235-3.252a1.434,1.434,0,0,0,.842-1.309v-2.01a10.7,10.7,0,0,1-3.992-8.352v-.556a2.5,2.5,0,0,1-.338-.221,2.654,2.654,0,0,1-.994-2.116v-2.49A10.632,10.632,0,0,1,368.169,790h2.661a10.633,10.633,0,0,1,10.562,10.678v.275a2.612,2.612,0,0,1-1.331,2.28v2.829a10.707,10.707,0,0,1-3.992,8.353v2.009a1.435,1.435,0,0,0,.841,1.31l7.236,3.251a6.654,6.654,0,0,1,3.9,6.07V843.74a1.245,1.245,0,1,1-2.49,0Zm-20.134-27.317a3.975,3.975,0,0,1-.55,2.016l4.629,4.681,4.629-4.68a3.973,3.973,0,0,1-.551-2.017v-.512a10.447,10.447,0,0,1-8.157,0Zm-1.66-14.191a1.268,1.268,0,0,1-.07,1.778,7.347,7.347,0,0,1-2.262,1.485v.566a8.071,8.071,0,1,0,16.142,0v-2.275c-3.435.417-9.077.346-12.944-3.563a1.269,1.269,0,0,1,0-1.78,1.235,1.235,0,0,1,1.761,0c1.262,1.275,5,4.082,12.457,2.593a.081.081,0,0,0,.057-.083v-.275a8.125,8.125,0,0,0-8.071-8.16h-2.661a8.124,8.124,0,0,0-8.07,8.16v2.49a.263.263,0,0,0,.021.114l.033-.006A4.461,4.461,0,0,0,362,802.16a1.236,1.236,0,0,1,1.759.072ZM338.977,843.74V830.805l-3.044-3.078a4.018,4.018,0,0,1-.617.39l-4.306,2.177a2.772,2.772,0,0,0-.595.407c.013.013.029.024.042.038l2.822,2.855a5.293,5.293,0,0,1,1.534,3.745v6.4a1.245,1.245,0,1,1-2.49,0v-6.4a2.777,2.777,0,0,0-.8-1.964l-2.029-2.051V843.74a1.245,1.245,0,1,1-2.49,0V832.779a5.275,5.275,0,0,1,2.9-4.738l4.306-2.177a1.426,1.426,0,0,0,.783-1.281v-2.769a9.359,9.359,0,0,1-3.992-7.679v-2.691a9.356,9.356,0,0,1,4.232-7.84,5.238,5.238,0,1,1,10,0,9.356,9.356,0,0,1,4.232,7.841v2.691a9.355,9.355,0,0,1-3.992,7.679v2.769a1.427,1.427,0,0,0,.783,1.281l1.188.6a1.266,1.266,0,0,1,.557,1.688,1.24,1.24,0,0,1-1.671.563l-1.187-.6a3.958,3.958,0,0,1-.617-.391l-3.045,3.079V843.74a1.245,1.245,0,1,1-2.49,0Zm-1.5-19.156a4.046,4.046,0,0,1-.13,1.01l2.877,2.91,2.877-2.91a4,4,0,0,1-.131-1.01v-1.537a9.152,9.152,0,0,1-5.494,0Zm-3.992-10.709v.261a6.738,6.738,0,0,0,13.468.374,10.315,10.315,0,0,1-2.4.291,9.818,9.818,0,0,1-4.758-1.242,11.181,11.181,0,0,1-2.309-1.7A9.939,9.939,0,0,1,333.482,813.875Zm4.167-5.032a1.245,1.245,0,0,1,.907.5,7.774,7.774,0,0,0,8.405,2.558v-.456a6.738,6.738,0,0,0-13.475-.175,8.132,8.132,0,0,0,3.193-2.061,1.242,1.242,0,0,1,.883-.369Q337.606,808.84,337.649,808.843Zm5.277-6.322a2.825,2.825,0,0,0,.043-.5,2.747,2.747,0,1,0-5.494,0,2.821,2.821,0,0,0,.048.495,9.126,9.126,0,0,1,5.4,0Z"
              transform="translate(-327 -790)"
              fill="#5A5A5A"
            />
          </svg>

          <Title title="Quem Somos" className={styles.title} />
        </div>

        {/* <p className={styles.description}>{settings.about_us}</p> */}

        <p className={styles.description}>
          A 1ª Primeira Câmara Privada de Mediação, Conciliação e Arbitragem da
          Região dos Lagos do Estado do Rio de Janeiro – PACTOS LAGOS, surgiu da
          necessidade de oferecer um serviço que solucione as lides de forma
          rápida e eficiente considerando a complexidade que envolve o trâmite
          de processos judiciais, fazendo necessário mudar a visão e buscar a
          desjudicialização dos conflitos. <br />
          <br />
          A PACTO LAGOS é uma empresa privada constituída para oferecer
          mecanismos extrajudiciais de soluções de conflitos envolvendo pessoas
          (físicas e jurídicas), bem como prestar atendimento e orientação que
          possam contribuir na resolução de conflitos, incentivando o consenso
          entre as partes, atuando seus objetivos sociais com segurança, sigilo
          e responsabilidade dos agentes. <br />
          <br />
          Todos os árbitros que compõem a equipe da PACTO LAGOS assinam um Termo
          de Imparcialidade para cada conflito os quais sejam nomeados,
          garantindo um procedimento arbitral justo à ambas as partes. <br />
          <br />
          Não se pode falar em pacificação de conflitos em que o equilíbrio das
          partes não seja adequadamente dimensionado. A PACTOS LAGOS tem
          compromisso com as garantias constitucionais das partes. A razão de
          ser da PACTOS LAGOS é oferecer mais um canal de superação de
          conflitos, colaborando para o progresso harmônico das relações entre
          pessoas. <br />
          <br />
          <strong>Visão</strong>
          <br />
          Ser referência em qualidade, agilidade e inovação na condução de
          processos com diálogos e consensuais de gestão de controvérsias,
          contribuindo para um raciocínio construtivo que leve à mudança de
          paradigmas de nossa sociedade e que promova seu desenvolvimento,
          fortalecendo os laços afetivos e sociais. <br />
          <br />
          <strong>Valores</strong>
          <br />
          Nossos alicerces são a qualidade, responsabilidade, comprometimento,
          imparcialidade, ética, transparência, diálogo e presteza para a
          resolução dos conflitos de forma satisfatória para as partes. <br />
          <br />
          <strong>Missão</strong>
          <br />
          Promover a resolução extrajudicial de conflitos com agilidade e
          segurança, atuando na condução de diálogos, de processos decisórios e
          de métodos consensuais com expertise técnica, ética e empenho.
          Atendemos pessoas físicas e jurídicas, bem como organizações de
          qualquer natureza, no âmbito privado, público e social. A melhoria das
          relações pessoais e empresariais, via intermediações isentas, céleres,
          de baixo custo, com qualidade e efetiva segurança jurídica é o nosso
          maior objetivo. <br />
          <br />
        </p>

        <Title title="Nosso Árbitros" />

        {/* <ul className={styles.list}>
          {referees.map((referee) => (
            <li>
              <img
                src={`https://painel.pactolagos.com.br${referee.image}`}
                alt={referee.name}
              />
              <span>{referee.name}</span>
              <p>{referee.bio}</p>
            </li>
          ))}
        </ul> */}

        <ul className={styles.list}>
          <li>
            <img src="/juliana.jpg" alt="Juliana Aguiar" />
            <span>Juliana Aguiar</span>
            <p>
              Advogada especializada em Processo Civil e Advocacia
              Extrajudicial, com experiência em assessoria, consultoria e
              contencioso nas áreas cível, família, consumidor, locação,
              contratos e legalização de imóveis, sempre buscando a resolução de
              conflitos através de conciliação e mediação. <br />
              Iniciou sua vida profissional como bancária no ano de 2000. Sendo
              gerente de Instituição Financeira atendendo Pessoa Física e
              Jurídica nos anos de 2005 a 2010. <br />
              Formada em 2009 pela Universidade Cândido Mendes na cidade de Nova
              Friburgo/RJ. Iniciou sua carreira como advogada somente no ano de
              2015, na cidade de Rio das Ostras/RJ. <br />
              Relatora Membro da Comissão de Ética e Disciplina da 52ª Subseção
              da Ordem dos Advogados do Brasil de Rio das Ostras/RJ desde 2019.
              Simpatizante ao Direito Sistêmico que consiste na análise do
              direito sobre uma ótica baseada nas ordens superiores que regem as
              relações humanas, no estudo das leis sistêmicas faz com que
              operador do direito tenha um olhar que vai além do que aparece no
              processo judicial.
              <br />
              Sócia/Árbitra da 1ª CâMARA PRIVADA DE MEDIAÇÃO, CONCILIAÇÃO E
              ARBITRAGEM DA REGIÃO DOS LAGOS DO ESTADO DO RIO DE JANEIRO
              LTDA.-ME (PACTO LAGOS).
            </p>
          </li>
          <li>
            <img src="/eduardo.jpg" alt="Eduardo Brez" />
            <span>Eduardo Brez</span>
            <p>
              Profissional com experiência em assessoria, consultoria e
              contencioso nas áreas cível, família, consumidor, locação e
              contratos em geral, sempre buscando a resolução de conflitos
              através da conciliação.
              <br />
              Graduado em Direito no ano 2000 pela Universidade Ibirapuera/SP.
              Iniciou sua carreira como estagiário no ano de 1996, passando por
              diversos escritórios até a sua graduação. <br />
              Atuou como advogado em São Paulo até o ano de 2010. <br />
              Em 2011 começou a exercer a advocacia na Cidade de Nova
              Friburgo/RJ.
              <br />
              No ano de 2014 iniciou a advocacia na Cidade de Rio das Ostras/RJ
              e região. <br />
              Conselheiro da 52ª Subseção da Ordem dos Advogados do Brasil de
              Rio das Ostras/RJ triênio 2016/2018.
              <br />
              Presidente da Comissão de Prerrogativas da 52ª Subseção da Ordem
              dos Advogados do Brasil de Rio das Ostras/RJ em 2016.
              <br />
              Conselheiro da 52ª Subseção da Ordem dos Advogados do Brasil de
              Rio das Ostras/RJ na atual gestão (2019/2021).
              <br />
              Diretor Membro da Comissão de Ética e Disciplina da 52ª Subseção
              da Ordem dos Advogados do Brasil de Rio das Ostras/RJ desde 2017.
              <br />
              Presidente da Comissão de Ética e Disciplina da 52ª Subseção da
              Ordem dos Advogados do Brasil de Rio das Ostras/RJ desde 2020.{" "}
              <br />
              Sócio/Árbitro da 1ª CâMARA PRIVADA DE MEDIAÇÃO, CONCILIAÇÃO E
              ARBITRAGEM DA REGIÃO DOS LAGOS DO ESTADO DO RIO DE JANEIRO
              LTDA.-ME (PACTO LAGOS)
            </p>
          </li>
          <li>
            <img src="/renata.jpg" alt="Renata Rodrigues" />
            <span>Renata Rodrigues</span>
            <p>
              Possui experiência nas áreas Trabalhista, Contratual e
              Consumerista, nos ramos da consultoria jurídica, na advocacia
              preventiva, visando sempre a melhor técnica jurídica para que o
              cliente atue de forma segura, com ênfase na mediação de conflitos,
              sempre que possível, e na Advocacia Contenciosa.
              <br />
              Iniciou sua carreira no ano de 2000, quando foi estagiária em um
              escritório de advocacia e logo após, ingressou no quadro de
              estagiários da Subdelegacia do Trabalho de Nova Friburgo, onde
              teve a oportunidade de atuar junto os procedimentos nos processos
              de autuação por infrações trabalhistas, ocupando o cargo até o fim
              da sua graduação acadêmica.
              <br />
              Após sua graduação, participou de diversos cursos jurídicos de
              aprimoramento e de forma a complementar sua atuação profissional
              concluiu o curso de PNL - Programação Neurolinguística.
              <br />
              Atualmente, em razão do novo cenário jurídico que se instaurou
              diante da calamidade pública pelo COVID-19, sua experiência no
              ramo trabalhista está se expandindo também à consultoria por
              videoconferência e relacionada, ainda, às medidas emergenciais
              trabalhistas que foram instituídas, aperfeiçoando-se por meio de
              cursos e palestras na área do direito do Trabalho de Exceção e em
              cursos de atualização no ramo do Direito do Trabalho tradicional.{" "}
              <br />
            </p>
          </li>
          <li>
            <img src="/toni.jpg" alt="José Antônio Pereira" />
            <span>José Antônio Pereira</span>
            <p>
              Possui treinamento em Inteligência Emocional no Trabalho, Formação
              em Coaching Executive Buzines, Leader Training Extreme Survivor –
              Instituto Tânia Zambon (RS) <br />
              Experiência no atendimento aos clientes, gestão de processos,
              gestão de pessoal, atendimento pós-venda, com alto nível de
              soluções amigáveis de litígios. <br />
              Atendo às regras, virtudes e necessidades do Código de Defesa do
              Consumidor, defensor da conciliação através da equidade para uma
              solução justa em que nenhuma das partes seja prejudicada. <br />
              Possui experiência no comércio de automóveis desde o ano de 2007,
              atuando como Consultor de Vendas, Supervisor, Gerente de Qualidade
              e Vendas e Gerente Geral. <br />
            </p>
          </li>
        </ul>
      </main>

      <Footer />
    </>
  );
}
