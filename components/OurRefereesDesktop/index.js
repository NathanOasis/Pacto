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
      {referees.slice(0, numberReferees).map((referee) => (
        <div className={styles.box}>
          <img
            src={`https://painel.pactolagos.com.br${referee.image}`}
            alt={referee.name}
          />
          <span>{referee.name}</span>
          <p>{referee.bio}</p>
        </div>
      ))}
    </>
  );
}

export default OurReferees;
