import React from "react";

import styles from "../styles/About.module.scss";

import NextHead from "../components/NextHead";
import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";

export default function About() {
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

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
        </p>

        <Title title="Nosso Árbitros" />

        <ul className={styles.list}>
          <li>
            <img src="/arbitro1.jpg" alt="Árbitro1" />
            <span>Nome completo</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            </p>
          </li>
          <li>
            <img src="/arbitro2.jpg" alt="Árbitro1" />
            <span>Nome completo</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            </p>
          </li>
          <li>
            <img src="/arbitro3.jpg" alt="Árbitro1" />
            <span>Nome completo</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            </p>
          </li>
          <li>
            <img src="/arbitro1.jpg" alt="Árbitro1" />
            <span>Nome completo</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            </p>
          </li>
        </ul>
      </main>

      <Footer />
    </>
  );
}
