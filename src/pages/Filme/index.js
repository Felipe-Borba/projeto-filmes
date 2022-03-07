import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
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

  function salvaFilme() {
    const minhaLista = localStorage.getItem("filmes");
    const filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === filme.id
    );
    if (hasFilme) {
      toast.warning("Você já possui esse filme salvo.");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("filmes", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso!");
  }

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
        <button onClick={salvaFilme}>Salvar</button>
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
