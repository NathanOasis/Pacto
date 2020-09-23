import axios from "axios";

const api = axios.create({
  baseURL: "https://painel.pactolagos.com.br/api",
  headers: {
    Authorization: "Bearer jSEmdEgfi9xxoWoqSzUnDo46au0oxW9y1SdiBUOk",
    "content-type": "application/json",
  },
});

export default api;
