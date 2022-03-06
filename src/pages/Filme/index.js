import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import "./filme.css";

function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      const response = await api.get(`r-api/?api=filmes/${id}`);

      if (response.data.length === []) {
        navigate("/");
        return;
      }
      console.log(response.data);
      setFilme(response.data);
      setLoading(false);
    }

    loadFilme();

    return () => {
      //chamado toda vez que o componente é desmontado
      console.log("Componente desmontado!");
    };
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando o filme...</h1>
      </div>
    );
  }
  return (
    <div className="filme-info">
      <h1>{filme.nome}</h1>
      <img src={filme.foto} alt={filme.nome} />

      <h3>Sinopse</h3>
      {filme.sinopse}

      <div className="botoes">
        <button>Salvar</button>
        <a
          target="blank"
          href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`}
        >
          <button>Trailer</button>
        </a>
      </div>
    </div>
  );
}

export default Filme;
