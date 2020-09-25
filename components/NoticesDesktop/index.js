import React, { useState, useEffect } from "react";
import Link from "next/link";

import { format } from "date-fns";

import api from "../../services/api";

import styles from "./Notices.module.scss";

function Notices({ numberNotices }) {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    api.get("listNews").then((response) => {
      setNotices(response.data);
    });
  }, []);

  return (
    <>
      {notices.slice(0, numberNotices).map((notice) => (
        <Link href={`/noticia/${notice.id}`}>
          <a>
            <div className={styles.box}>
              <img
                src={`https://painel.pactolagos.com.br/storage/${notice.main_image}`}
                alt={notice.title}
              />
              <span>
                {notice.title}
                <strong>
                  {format(new Date(notice.created_at), "dd/MM/yyyy")}
                </strong>
              </span>
              <p>{notice.summary_text}</p>
            </div>
          </a>
        </Link>
      ))}
    </>
  );
}

export default Notices;
