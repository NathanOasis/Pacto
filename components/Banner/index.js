import React, { useState, useEffect } from "react";
import api from "../../services/api";

import Link from "next/link";

function Banner() {
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    api.get("settings").then((response) => {
      setSettings(response.data);
    });
  }, []);

  return (
    <Link href={`/${settings.link_main_image}`}>
      <a>
        <img
          src={`https://painel.pactolagos.com.br/storage/${settings.main_image}`}
          alt="Banner Pacto Lagos"
        />
      </a>
    </Link>
  );
}

export default Banner;
