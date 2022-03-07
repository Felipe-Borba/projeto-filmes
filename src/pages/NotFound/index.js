import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function NotFound() {
  return (
    <div className="not-found">
      <h1> 404 </h1>
      <h2> Pagina não encontrada :( </h2>
      <Link to="/"> Voltar para a página inicial </Link>
    </div>
  );
}

export default NotFound;
