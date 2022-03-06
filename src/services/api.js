import axios from "axios";

//TODO remover essa dependência de api de terceiros, trocando para json-server ou algo similar
const api = axios.create({
  baseURL: "https://sujeitoprogramador.com",
});

export default api;
