import axios from "axios";
// import api from "../../services/api"
import { useState, useEffect } from "react";
import HeaderPainel from "../../components/HeaderPainel";
import { PageTitle } from "../../components/HeaderPainel";
import "../../styles/global";
import { CadastroProduto } from "./styled";
import { Link } from "react-router-dom";

export default function CadastrarProduto() {
  const [produto, setProduto] = useState([]);

  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");

  const baseURL = "https://gamaxp-desafio4-grupo6.onrender.com/produtos";

  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setProduto(response.data);
    });
  }, []);

  function criarProduto() {
    axios
      .post(baseURL, {
        nome,
        foto,
        descricao,
        categoria,
        preco,
      })
      .then((response) => {
        console.log(response.data);
        setProduto(response.data);
      });
  }

  if (!produto) return "Sem produtos cadastrados!";

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="painelCadastro">
        <HeaderPainel />
      </div>
      <CadastroProduto>
        <div className="container">
          <div className="painel">
            <Link to="/paineladm">↩ voltar</Link>
            <br />
            <br />
            <PageTitle>Cadastro de Produto</PageTitle>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                required
                placeholder="Nome do produto"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <br />
              <input
                type="number"
                required
                placeholder="Preço"
                name="preco"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
              />
              <br />
              <input
                type="file"
                required
                accept="image/png, image/jpeg"
                multiple
                value={foto}
                onChange={(e) => setFoto(e.target.value)}
              />
              <br />
              <select
                required
                id="categoria"
                name="categoria"
                placeholder="Categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="" disabled selected>
                  Categoria
                </option>
                <option value="sutias">Sutiãs</option>
                <option value="calcinhas">Calcinhas</option>
                <option value="pijamas">Pijamas</option>
              </select>
              <br />
              <input
                type="text"
                required
                id="descricao"
                placeholder="Descrição"
                name="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
              <br />
              <button id="btnSalvar" onClick={criarProduto}>
                Salvar
              </button>
              <br />
            </form>
          </div>
        </div>
      </CadastroProduto>
    </>
  );
}
