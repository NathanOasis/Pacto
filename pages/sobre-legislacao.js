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
          {/* <p>{settings.legislation}</p> */}

          <p>
            LEI No 9.307, DE 23 DE SETEMBRO DE 1996. (Com as alterações da LEI
            No 13.129, DE 26 DE MAIO DE 2015) <br />
            <br />
            O PRESIDENTE DA REPÚBLICA Faço saber que o Congresso Nacional
            decreta e eu sanciono a seguinte Lei: <br />
            <br />
            CAPÍTULO I – DISPOSIÇÕES GERAIS
            <br />
            <br />
            Art. 1º – As pessoas capazes de contratar poderão valer-se da
            arbitragem para dirimir litígios relativos a direitos patrimoniais
            disponíveis.
            <br />
            §1º - A administração pública direta e indireta poderá utilizar-se
            da arbitragem para dirimir conflitos relativos a direitos
            patrimoniais disponíveis.
            <br />
            §2º - A autoridade ou o órgão competente da administração pública
            direta para a celebração de convenção de arbitragem é a mesma para a
            realização de acordos ou transações.
            <br />
            <br />
            Art. 2º – A arbitragem poderá ser de direito ou de equidade, a
            critério das partes.
            <br />
            §1º - Poderão as partes escolher, livremente, as regras de direito
            que serão aplicadas na arbitragem, desde que não haja violação aos
            bons costumes e à ordem pública.
            <br />
            §2º - Poderão, também, as partes convencionar que a arbitragem se
            realize com base nos princípios gerais de direito, nos usos e
            costumes e nas regras internacionais de comércio.
            <br />
            §3o - A arbitragem que envolva a administração pública será sempre
            de direito e respeitará o princípio da publicidade.
            <br />
            <br />
            CAPÍTULO II – DA CONVENÇÃO DA ARBITRAGEM E SEUS EFEITOS
            <br />
            <br />
            Art. 3º – As partes interessadas podem submeter a solução de seus
            litígios ao juízo arbitral mediante convenção de arbitragem, assim
            entendida a cláusula compromissória e o compromisso arbitral.
            <br />
            <br />
            Art. 4º – A cláusula compromissória é a convenção através da qual as
            partes em um contrato comprometem-se a submeter à arbitragem os
            litígios que possam vir a surgir, relativamente a tal contrato.
            <br />
            §1º - A cláusula compromissória deve ser estipulada por escrito,
            podendo estar inserta no próprio contrato ou em documento apartado
            que a ele se refira.
            <br />
            §2º - Nos contratos de adesão, a cláusula compromissória só terá
            eficácia se o aderente tomar a iniciativa de instituir a arbitragem
            ou concordar, expressamente, com a sua instituição, desde que por
            escrito em documento anexo ou em negrito, com a assinatura ou visto
            especialmente para essa cláusula.
            <br />
            §3o - (VETADO). (Incluído pela Lei nº 13.129, de 2015) (Vigência)
            <br />
            §4o - (VETADO). (Incluído pela Lei nº 13.129, de 2015) (Vigência)
            <br />
            <br />
            Art. 5º – Reportando-se as partes, na cláusula compromissória, às
            regras de algum órgão arbitral institucional ou entidade
            especializada, a arbitragem será instituída e processada de acordo
            com tais regras, podendo, igualmente, as partes estabelecer na
            própria cláusula, ou em outro documento, a forma convencionada para
            a instituição da arbitragem.
            <br />
            Art. 6º – Não havendo acordo prévio sobre a forma de instituir a
            arbitragem, a parte interessada manifestará à outra parte sua
            intenção de dar início à arbitragem, por via postal ou por outro
            meio qualquer de comunicação, mediante comprovação de recebimento,
            convocando-a para, em dia, hora e local certos, firmar o compromisso
            arbitral.
            <br />
            Parágrafo único. Não comparecendo a parte convocada ou,
            comparecendo, recusar-se a firmar o compromisso arbitral, poderá a
            outra parte propor a demanda de que trata o art. 7º desta Lei,
            perante o órgão do Poder Judiciário a que, originariamente, tocaria
            o julgamento da causa.
            <br />
            <br />
            Art. 7º – Existindo cláusula compromissória e havendo resistência
            quanto à instituição da arbitragem, poderá a parte interessada
            requerer a citação da outra parte para comparecer em juízo a fim de
            lavrar-se o compromisso, designando o juiz audiência especial para
            tal fim.
            <br />
            §1º - O autor indicará, com precisão, o objeto da arbitragem,
            instruindo o pedido com o documento que contiver a cláusula
            compromissória.
            <br />
            §2º - Comparecendo as partes à audiência, o juiz tentará,
            previamente, a conciliação acerca do litígio. Não obtendo sucesso,
            tentará o juiz conduzir as partes à celebração, de comum acordo, do
            compromisso arbitral.
            <br />
            §3º - Não concordando as partes sobre os termos do compromisso,
            decidirá o juiz, após ouvir o réu, sobre seu conteúdo, na própria
            audiência ou no prazo de dez dias, respeitadas as disposições da
            cláusula compromissória e atendendo ao disposto nos arts. 10 e 21, §
            2º, desta Lei.
            <br />
            §4º - Se a cláusula compromissória nada dispuser sobre a nomeação de
            árbitros, caberá ao juiz, ouvidas as partes, estatuir a respeito,
            podendo nomear árbitro único para a solução do litígio.
            <br />
            §5º - A ausência do autor, sem justo motivo, à audiência designada
            para a lavratura do compromisso arbitral, importará a extinção do
            processo sem julgamento de mérito.
            <br />
            §6º - Não comparecendo o réu à audiência, caberá ao juiz, ouvido o
            autor, estatuir a respeito do conteúdo do compromisso, nomeando
            árbitro único. §7º - A sentença que julgar procedente o pedido
            valerá como compromisso arbitral.
            <br />
            <br />
            Art. 8º – A cláusula compromissória é autônoma em relação ao
            contrato em que estiver inserta, de tal sorte que a nulidade deste
            não implica, necessariamente, a nulidade da cláusula compromissória.
            <br />
            Parágrafo único: Caberá ao árbitro decidir de ofício, ou por
            provocação das partes, as questões acerca da existência, validade e
            eficácia da convenção de arbitragem e do contrato que contenha a
            cláusula compromissória.
            <br />
            Art. 9º – O compromisso arbitral é a convenção através da qual as
            partes submetem um litígio à arbitragem de uma ou mais pessoas,
            podendo ser judicial ou extrajudicial.
            <br />
            §1º - O compromisso arbitral judicial celebrar-se-á por termo nos
            autos, perante o juízo ou tribunal, onde tem curso a demanda.
            <br />
            §2º - O compromisso arbitral extrajudicial será celebrado por
            escrito particular, assinado por duas testemunhas, ou por
            instrumento público.
            <br />
            <br />
            Art. 10 – Constará, obrigatoriamente, do compromisso arbitral:
            <br />
            I – o nome, profissão, estado civil e domicílio das partes;
            <br />
            II – o nome, profissão e domicílio do árbitro, ou dos árbitros, ou,
            se for o caso, a identificação da entidade à qual as partes
            delegaram a indicação de árbitros;
            <br />
            III – a matéria que será objeto da arbitragem; e<br />
            IV – o lugar em que será proferida a sentença arbitral.
            <br />
            <br />
            Art. 11 – Poderá, ainda, o compromisso arbitral conter:
            <br />
            I – local, ou locais, onde se desenvolverá a arbitragem;
            <br />
            II – a autorização para que o árbitro ou os árbitros julguem por
            equidade, se assim for convencionado pelas partes;
            <br />
            III – o prazo para apresentação da sentença arbitral;
            <br />
            IV – a indicação da lei nacional ou das regras corporativas
            aplicáveis à arbitragem, quando assim convencionarem as partes;
            <br />
            V – a declaração da responsabilidade pelo pagamento dos honorários e
            das despesas com a arbitragem; e<br />
            VI – a fixação dos honorários do árbitro, ou dos árbitros.
            <br />
            Parágrafo único: Fixando as partes os honorários do árbitro, ou dos
            árbitros, no compromisso arbitral, este constituirá título executivo
            extrajudicial; não havendo tal estipulação, o árbitro requererá ao
            órgão do Poder Judiciário que seria competente para julgar,
            originariamente, a causa que os fixe por sentença.
            <br />
            <br />
            Art. 12 – Extingue-se o compromisso arbitral:
            <br />
            I – escusando-se qualquer dos árbitros, antes de aceitar a nomeação,
            desde que as partes tenham declarado, expressamente, não aceitar
            substituto;
            <br />
            II – falecendo ou ficando impossibilitado de dar seu voto algum dos
            árbitros, desde que as partes declarem, expressamente, não aceitar
            substituto; e<br />
            III – tendo expirado o prazo a que se refere o art. 11, inciso III,
            desde que a parte interessada tenha notificado o árbitro, ou o
            presidente do tribunal arbitral, concedendo-lhe o prazo de dez dias
            para a prolação e apresentação da sentença arbitral.
            <br />
            <br />
            CAPÍTULO III – DOS ÁRBITROS
            <br />
            <br />
            Art. 13 – Pode ser árbitro qualquer pessoa capaz e que tenha a
            confiança das partes.
            <br />
            §1º - As partes nomearão um ou mais árbitros, sempre em número
            ímpar, podendo nomear, também, os respectivos suplentes.
            <br />
            §2º - Quando as partes nomearem árbitros em número par, estes estão
            autorizados, desde logo, a nomear mais um árbitro. Não havendo
            acordo, requererão as partes ao órgão do Poder Judiciário a que
            tocaria, originariamente, o julgamento da causa a nomeação do
            árbitro, aplicável, no que couber, o procedimento previsto no art.
            7º desta Lei.
            <br />
            §3º - As partes poderão, de comum acordo, estabelecer o processo de
            escolha dos árbitros, ou adotar as regras de um órgão arbitral
            institucional ou entidade especializada.
            <br />
            §4º - Sendo nomeados vários árbitros, estes, por maioria, elegerão o
            presidente do tribunal arbitral. Não havendo consenso, será
            designado presidente o mais idoso.
            <br />
            §4º - As partes, de comum acordo, poderão afastar a aplicação de
            dispositivo do regulamento do órgão arbitral institucional ou
            entidade especializada que limite a escolha do árbitro único,
            coárbitro ou presidente do tribunal à respectiva lista de árbitros,
            autorizado o controle da escolha pelos órgãos competentes da
            instituição, sendo que, nos casos de impasse e arbitragem
            multiparte, deverá ser observado o que dispuser o regulamento
            aplicável.
            <br />
            §5º - O árbitro ou o presidente do tribunal designará, se julgar
            conveniente, um secretário, que poderá ser um dos árbitros.
            <br />
            §6º - No desempenho de sua função, o árbitro deverá proceder com
            imparcialidade, independência, competência, diligência e discrição.
            <br />
            §7º - Poderá o árbitro ou o tribunal arbitral determinar às partes o
            adiantamento de verbas para despesas e diligências que julgar
            necessárias.
            <br />
            <br />
            Art. 14 – Estão impedidos de funcionar como árbitros as pessoas que
            tenham, com as partes ou com o litígio que lhes for submetido,
            algumas das relações que caracterizam os casos de impedimento ou
            suspeição de juízes, aplicando-se-lhes, no que couber, os mesmos
            deveres e responsabilidades, conforme previsto no Código de Processo
            Civil.
            <br />
            §1 - As pessoas indicadas para funcionar como árbitro têm o dever de
            revelar, antes da aceitação da função, qualquer fato que denote
            dúvida justificada quanto à sua imparcialidade e independência.
            <br />
            §2º - O árbitro somente poderá ser recusado por motivo ocorrido após
            sua nomeação. Poderá, entretanto, ser recusado por motivo anterior à
            sua nomeação, quando:
            <br />
            a) não for nomeado, diretamente, pela parte; ou
            <br />
            b) o motivo para a recusa do árbitro for conhecido posteriormente à
            sua nomeação.
            <br />
            <br />
            Art. 15 – A parte interessada em arguir a recusa do árbitro
            apresentará, nos termos do art. 20, a respectiva exceção,
            diretamente ao árbitro ou ao presidente do tribunal arbitral,
            deduzindo suas razões e apresentando as provas pertinentes.
            <br />
            Parágrafo único: Acolhida a exceção, será afastado o árbitro
            suspeito ou impedido, que será substituído, na forma do art. 16
            desta Lei.
            <br />
            <br />
            Art. 16 – Se o árbitro escusar-se antes da aceitação da nomeação,
            ou, após a aceitação, vier a falecer, tornar-se impossibilitado para
            o exercício da função, ou for recusado, assumirá seu lugar o
            substituto indicado no compromisso, se houver.
            <br />
            §1º - Não havendo substituto indicado para o árbitro, aplicar-se-ão
            as regras do órgão arbitral institucional ou entidade especializada,
            se as partes as tiverem invocado na convenção de arbitragem.
            <br />
            §2º - Nada dispondo a convenção de arbitragem e não chegando as
            partes a um acordo sobre a nomeação do árbitro a ser substituído,
            procederá a parte interessada da forma prevista no art. 7º desta
            Lei, a menos que as partes tenham declarado, expressamente, na
            convenção de arbitragem, não aceitar substituto.
            <br />
            <br />
            Art. 17 – Os árbitros, quando no exercício de suas funções ou em
            razão delas, ficam equiparados aos funcionários públicos, para os
            efeitos da legislação penal.
            <br />
            <br />
            Art. 18 – O árbitro é juiz de fato e de direito, e a sentença que
            proferir não fica sujeita a recurso ou a homologação pelo Poder
            Judiciário.
            <br />
            CAPÍTULO IV – DO PROCEDIMENTO ARBITRAL
            <br />
            <br />
            Art. 19 – Considera-se instituída a arbitragem quando aceita a
            nomeação pelo árbitro, se for único, ou por todos, se forem vários.
            <br />
            §1º - Instituída a arbitragem e entendendo o árbitro ou o tribunal
            arbitral que há necessidade de explicitar questão disposta na
            convenção de arbitragem, será elaborado, juntamente com as partes,
            adendo firmado por todos, que passará a fazer parte integrante da
            convenção de arbitragem.
            <br />
            §2º - A instituição da arbitragem interrompe a prescrição,
            retroagindo à data do requerimento de sua instauração, ainda que
            extinta a arbitragem por ausência de jurisdição.
            <br />
            <br />
            Art. 20 – A parte que pretender arguir questões relativas à
            competência, suspeição ou impedimento do árbitro ou dos árbitros,
            bem como nulidade, invalidade ou ineficácia da convenção de
            arbitragem, deverá fazê-lo na primeira oportunidade que tiver de se
            manifestar, após a instituição da arbitragem.
            <br />
            §1º - Acolhida a arguição de suspeição ou impedimento, será o
            árbitro substituído nos termos do art. 16 desta Lei, reconhecida a
            incompetência do árbitro ou do tribunal arbitral, bem como a
            nulidade, invalidade ou ineficácia da convenção de arbitragem, serão
            as partes remetidas ao órgão do Poder Judiciário competente para
            julgar a causa.
            <br />
            §2º - Não sendo acolhida a arguição, terá normal prosseguimento a
            arbitragem, sem prejuízo de vir a ser examinada a decisão pelo órgão
            do Poder Judiciário competente, quando da eventual propositura da
            demanda de que trata o art. 33 desta Lei.
            <br />
            <br />
            Art. 21 – A arbitragem obedecerá ao procedimento estabelecido pelas
            partes na convenção de arbitragem, que poderá reportar-se às regras
            de um órgão arbitral institucional ou entidade especializada,
            facultando-se, ainda, às partes delegar ao próprio árbitro, ou ao
            tribunal arbitral, regular o procedimento. §1º - Não havendo
            estipulação acerca do procedimento, caberá ao árbitro ou ao tribunal
            arbitral discipliná-lo.
            <br />
            §2º - Serão, sempre, respeitados no procedimento arbitral os
            princípios do contraditório, da igualdade das partes, da
            imparcialidade do árbitro e de seu livre convencimento.
            <br />
            §3º - As partes poderão postular por intermédio de advogado,
            respeitada, sempre, a faculdade de designar quem as represente ou
            assista no procedimento arbitral.
            <br />
            §4º - Competirá ao árbitro ou ao tribunal arbitral, no início do
            procedimento, tentar a conciliação das partes, aplicando-se, no que
            couber, o art. 28 desta Lei.
            <br />
            <br />
            Art. 22 – Poderá o árbitro ou o tribunal arbitral tomar o depoimento
            das partes, ouvir testemunhas e determinar a realização de perícias
            ou outras provas que julgar necessárias, mediante requerimento das
            partes ou de ofício. §1º - O depoimento das partes e das testemunhas
            será tomado em local, dia e hora previamente comunicados, por
            escrito, e reduzido a termo, assinado pelo depoente, ou a seu rogo,
            e pelos árbitros.
            <br />
            §2º - Em caso de desatendimento, sem justa causa, da convocação para
            prestar depoimento pessoal, o árbitro ou o tribunal arbitral levará
            em consideração o comportamento da parte faltosa, ao proferir sua
            sentença; se a ausência for de testemunha, nas mesmas
            circunstâncias, poderá o árbitro ou o presidente do tribunal
            arbitral requerer à autoridade judiciária que conduza a testemunha
            renitente, comprovando a existência da convenção de arbitragem. §3º
            - A revelia da parte não impedirá que seja proferida a sentença
            arbitral.
            <br />
            §4º - (Revogado pela Lei nº 13.129, de 2015) (Vigência)
            <br />
            §5º - Se, durante o procedimento arbitral, um árbitro vier a ser
            substituído fica a critério do substituto repetir as provas já
            produzidas.
            <br />
            <br />
            CAPÍTULO IV-A – DAS TUTELAS CAUTELARES E DE URGÊNCIA
            <br />
            <br />
            Art. 22-A – Antes de instituída a arbitragem, as partes poderão
            recorrer ao Poder Judiciário para a concessão de medida cautelar ou
            de urgência.
            <br />
            Parágrafo único: Cessa a eficácia da medida cautelar ou de urgência
            se a parte interessada não requerer a instituição da arbitragem no
            prazo de 30 (trinta) dias, contado da data de efetivação da
            respectiva decisão.
            <br />
            <br />
            Art. 22-B – Instituída a arbitragem, caberá aos árbitros manter,
            modificar ou revogar a medida cautelar ou de urgência concedida pelo
            Poder Judiciário. Parágrafo único: Estando já instituída a
            arbitragem, a medida cautelar ou de urgência será requerida
            diretamente aos árbitros.
            <br />
            <br />
            CAPÍTULO IV-B – DA CARTA ARBITRAL
            <br />
            <br />
            Art. 22-C – O árbitro ou o tribunal arbitral poderá expedir carta
            arbitral para que o órgão jurisdicional nacional pratique ou
            determine o cumprimento, na área de sua competência territorial, de
            ato solicitado pelo árbitro.
            <br />
            Parágrafo único. No cumprimento da carta arbitral será observado o
            segredo de justiça, desde que comprovada a confidencialidade
            estipulada na arbitragem.
            <br />
            <br />
            CAPÍTULO V – DA SENTENÇA ARBITRAL
            <br />
            <br />
            Art. 23 – A sentença arbitral será proferida no prazo estipulado
            pelas partes. Nada tendo sido convencionado, o prazo para a
            apresentação da sentença é de seis meses, contado da instituição da
            arbitragem ou da substituição do árbitro.
            <br />
            §1º - Os árbitros poderão proferir sentenças parciais.
            <br />
            §2º - As partes e os árbitros, de comum acordo, poderão prorrogar o
            prazo para proferir a sentença final.
            <br />
            Art. 24 – A decisão do árbitro ou dos árbitros será expressa em
            documento escrito.
            <br />
            §1º - Quando forem vários os árbitros, a decisão será tomada por
            maioria. Se não houver acordo majoritário, prevalecerá o voto do
            presidente do tribunal arbitral.
            <br />
            §2º - O árbitro que divergir da maioria poderá, querendo, declarar
            seu voto em separado.
            <br />
            <br />
            Art. 25 – (Revogado pela Lei nº 13.129, de 2015) (Vigência)
            <br />
            Parágrafo único: (Revogado pela Lei nº 13.129, de 2015) (Vigência)
            <br />
            <br />
            Art. - 26 – São requisitos obrigatórios da sentença arbitral:
            <br />
            I – o relatório, que conterá os nomes das partes e um resumo do
            litígio;
            <br />
            II – os fundamentos da decisão, onde serão analisadas as questões de
            fato e de direito, mencionando-se, expressamente, se os árbitros
            julgaram por equidade;
            <br />
            III – o dispositivo, em que os árbitros resolverão as questões que
            lhes forem submetidas e estabelecerão o prazo para o cumprimento da
            decisão, se for o caso; e<br />
            IV – a data e o lugar em que foi proferida.
            <br />
            Parágrafo único: A sentença arbitral será assinada pelo árbitro ou
            por todos os árbitros. Caberá ao presidente do tribunal arbitral, na
            hipótese de um ou alguns dos árbitros não poder ou não querer
            assinar a sentença, certificar tal fato.
            <br />
            Art. 27 – A sentença arbitral decidirá sobre a responsabilidade das
            partes acerca das custas e despesas com a arbitragem, bem como sobre
            verba decorrente de litigância de má-fé, se for o caso, respeitadas
            as disposições da convenção de arbitragem, se houver.
            <br />
            <br />
            Art. 28 – Se, no decurso da arbitragem, as partes chegarem a um
            acordo quanto ao litígio, o árbitro ou o tribunal arbitral poderá, a
            pedido das partes, declarar tal fato mediante sentença arbitral, que
            conterá os requisitos do art. 26 desta Lei.
            <br />
            <br />
            Art. 29 – Proferida a sentença arbitral, dá-se por finda a
            arbitragem, devendo o árbitro, ou o presidente do tribunal arbitral,
            enviar cópia da decisão às partes, por via postal ou por outro meio
            qualquer de comunicação, mediante comprovação de recebimento, ou,
            ainda, entregando-a diretamente às partes, mediante recibo.
            <br />
            <br />
            Art. 30 – No prazo de 5 (cinco) dias, a contar do recebimento da
            notificação ou da ciência pessoal da sentença arbitral, salvo se
            outro prazo for acordado entre as partes, a parte interessada,
            mediante comunicação à outra parte, poderá solicitar ao árbitro ou
            ao tribunal arbitral que:
            <br />
            I – corrija qualquer erro material da sentença arbitral;
            <br />
            II – esclareça alguma obscuridade, dúvida ou contradição da sentença
            arbitral, ou se pronuncie sobre ponto omitido a respeito do qual
            devia manifestar-se a decisão.
            <br />
            <br />
            Parágrafo único: O árbitro ou o tribunal arbitral decidirá no prazo
            de 10 (dez) dias ou em prazo acordado com as partes, aditará a
            sentença arbitral e notificará as partes na forma do art. 29.
            <br />
            <br />
            Art. 31 – A sentença arbitral produz, entre as partes e seus
            sucessores, os mesmos efeitos da sentença proferida pelos órgãos do
            Poder Judiciário e, sendo condenatória, constitui título executivo.
            <br />
            <br />
            Art. 32 – É nula a sentença arbitral se:
            <br />
            I – for nula a convenção de arbitragem;
            <br />
            II – emanou de quem não podia ser árbitro;
            <br />
            III – não contiver os requisitos do art. 26 desta Lei;
            <br />
            IV – for proferida fora dos limites da convenção de arbitragem;
            <br />
            V – (Revogado pela Lei nº 13.129, de 2015) (Vigência)
            <br />
            VI – comprovado que foi proferida por prevaricação, concussão ou
            corrupção passiva;
            <br />
            VII – proferida fora do prazo, respeitado o disposto no art. 12,
            inciso III, desta Lei; e<br />
            VIII – forem desrespeitados os princípios de que trata o art. 21, §
            2º, desta Lei.
            <br />
            <br />
            Art. 33 – A parte interessada poderá pleitear ao órgão do Poder
            Judiciário competente a declaração de nulidade da sentença arbitral,
            nos casos previstos nesta Lei.
            <br />
            §1º - A demanda para a declaração de nulidade da sentença arbitral,
            parcial ou final, seguirá as regras do procedimento comum, previstas
            na Lei no 5.869, de 11 de janeiro de 1973 (Código de Processo
            Civil), e deverá ser proposta no prazo de até 90 (noventa) dias após
            o recebimento da notificação da respectiva sentença, parcial ou
            final, ou da decisão do pedido de esclarecimentos.
            <br />
            §2º - A sentença que julgar procedente o pedido declarará a nulidade
            da sentença arbitral, nos casos do art. 32, e determinará, se for o
            caso, que o árbitro ou o tribunal profira nova sentença arbitral.
            <br />
            §3º - A declaração de nulidade da sentença arbitral também poderá
            ser arguida mediante impugnação, conforme o art. 475-L e seguintes
            da Lei no 5.869, de 11 de janeiro de 1973 (Código de Processo
            Civil), se houver execução judicial.
            <br />
            §4º - A parte interessada poderá ingressar em juízo para requerer a
            prolação de sentença arbitral complementar, se o árbitro não decidir
            todos os pedidos submetidos à arbitragem.
            <br />
            <br />
            CAPÍTULO VI – DO RECONHECIMENTO E EXECUÇÃO DE SENTENÇAS ARBITRAIS
            ESTRANGEIRAS
            <br />
            <br />
            Art. 34 – A sentença arbitral estrangeira será reconhecida ou
            executada no Brasil de conformidade com os tratados internacionais
            com eficácia no ordenamento interno e, na sua ausência, estritamente
            de acordo com os termos desta Lei.
            <br />
            Parágrafo único: Considera-se sentença arbitral estrangeira a que
            tenha sido proferida fora do território nacional.
            <br />
            <br />
            Art. 35 – Para ser reconhecida ou executada no Brasil, a sentença
            arbitral estrangeira está sujeita, unicamente, à homologação do
            Superior Tribunal de Justiça.
            <br />
            <br />
            Art. 36 – Aplica-se à homologação para reconhecimento ou execução de
            sentença arbitral estrangeira, no que couber, o disposto nos arts.
            483 e 484 do Código de Processo Civil.
            <br />
            <br />
            Art. 37 – A homologação de sentença arbitral estrangeira será
            requerida pela parte interessada, devendo a petição inicial conter
            as indicações da lei processual, conforme o art. 282 do Código de
            Processo Civil, e ser instruída, necessariamente, com:
            <br />
            I – o original da sentença arbitral ou uma cópia devidamente
            certificada, autenticada pelo consulado brasileiro e acompanhada de
            tradução oficial;
            <br />
            II – o original da convenção de arbitragem ou cópia devidamente
            certificada, acompanhada de tradução oficial.
            <br />
            <br />
            Art. 38 – Somente poderá ser negada a homologação para o
            reconhecimento ou execução de sentença arbitral estrangeira, quando
            o réu demonstrar que:
            <br />
            I – as partes na convenção de arbitragem eram incapazes;
            <br />
            II – a convenção de arbitragem não era válida segundo a lei à qual
            as partes a submeteram, ou, na falta de indicação, em virtude da lei
            do país onde a sentença arbitral foi proferida;
            <br />
            III – não foi notificado da designação do árbitro ou do procedimento
            de arbitragem, ou tenha sido violado o princípio do contraditório,
            impossibilitando a ampla defesa;
            <br />
            IV – a sentença arbitral foi proferida fora dos limites da convenção
            de arbitragem, e não foi possível separar a parte excedente daquela
            submetida à arbitragem;
            <br />
            V – a instituição da arbitragem não está de acordo com o compromisso
            arbitral ou cláusula compromissória;
            <br />
            VI – a sentença arbitral não se tenha, ainda, tornado obrigatória
            para as partes, tenha sido anulada, ou, ainda, tenha sido suspensa
            por órgão judicial do país onde a sentença arbitral for prolatada.
            <br />
            <br />
            Art. 39 – A homologação para o reconhecimento ou a execução da
            sentença arbitral estrangeira também será denegada se o Superior
            Tribunal de Justiça constatar que:
            <br />
            I – segundo a lei brasileira, o objeto do litígio não é suscetível
            de ser resolvido por arbitragem;
            <br />
            II – a decisão ofende a ordem pública nacional.
            <br />
            Parágrafo único. Não será considerada ofensa à ordem pública
            nacional a efetivação da citação da parte residente ou domiciliada
            no Brasil, nos moldes da convenção de arbitragem ou da lei
            processual do país onde se realizou a arbitragem, admitindo-se,
            inclusive, a citação postal com prova inequívoca de recebimento,
            desde que assegure à parte brasileira tempo hábil para o exercício
            do direito de defesa.
            <br />
            <br />
            Art. 40 – A denegação da homologação para reconhecimento ou execução
            de sentença arbitral estrangeira por vícios formais, não obsta que a
            parte interessada renove o pedido, uma vez sanados os vícios
            apresentados.
            <br />
            <br />
            CAPÍTULO VII – DISPOSIÇÕES FINAIS
            <br />
            <br />
            Art. 41 – Os arts. 267, inciso VII; 301, inciso IX; e 584, inciso
            III, do Código de Processo Civil passam a ter a seguinte redação:
            <br />
            “Art. 267……………………………………………………………….
            <br />
            VII – pela convenção de arbitragem;”
            <br />
            “Art. 301……………………………………………………………….
            <br />
            IX – convenção de arbitragem;”
            <br />
            “Art. 584…………………………………………………………………
            <br />
            III – a sentença arbitral e a sentença homologatória de transação ou
            de conciliação;”
            <br />
            <br />
            Art. 42. O art. 520 do Código de Processo Civil passa a ter mais um
            inciso, com a seguinte redação:
            <br />
            “Art. 520…………………………………………………………………
            <br />
            VI – julgar procedente o pedido de instituição de arbitragem.”
            <br />
            Art. 43. Esta Lei entrará em vigor sessenta dias após a data de sua
            publicação.
            <br />
            Art. 44 - Ficam revogados os arts. 1.037 a 1.048 da Lei nº 3.071, de
            1º de janeiro de 1916, Código Civil Brasileiro; os arts. 101 e 1.072
            a 1.102 da Lei nº 5.869, de 11 de janeiro de 1973, Código de
            Processo Civil; e demais disposições em contrário.
            <br />
            <br />
            Lei 9.307/1996
            <br />
            <br />
            Brasília, 23 de setembro de 1996; 175º da Independência e 108º da
            República.
            <br />
            FERNANDO HENRIQUE CARDOSO
            <br />
            Nelson A. Jobim
            <br />
            <br />
            Este texto não substitui o publicado no DOU de 24.9.1996
            <br />
            (Alterações) Lei No 13.129/2015
            <br />
            <br />
            Brasília, 26 de maio de 2015; 194o da Independência e 127o da
            República.
            <br />
            MICHEL TEMER
            <br />
            José Eduardo Cardozo
            <br />
            Manoel Dias Luís Inácio Lucena Adams
            <br />
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
