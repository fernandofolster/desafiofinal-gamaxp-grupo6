import { useState, useEffect } from "react";
import HeaderPainel from "../../components/HeaderPainel";
import "../../styles/global.js";
import { PageTitle } from "../../components/HeaderPainel";
import { PainelCadastro } from "./styled";
import { Link } from "react-router-dom";
import { getCategory } from "../../services/MainApi/categorias";
import { createProduct } from "../../services/MainApi/produtos";
import { productPayload } from "../../services/MainApi/produtos";

export default function PainelAdmCadastro() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [foto, setFoto] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");

  const cadastroProduto = async (event) => {
    event.preventDefault();

    const payload: productPayload = {
      nome,
      preco,
      quantidade,
      foto,
      categoria,
      descricao,
    };

    try {
      const response = await createProduct(payload);
      if (response.status !== 201) {
        return alert("Deu algo errado");
      }
      alert("Produto cadastrado com sucesso");
    } catch (error) {
      alert("Deu algo errado");
    }
  };

  interface Categoria {
    nome: string;
    _id: any;
  }
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getCategory();
        setCategorias(response.data);
      } catch (error) {
        alert("Deu algo errado");
      }
    })();
  }, [setCategorias]);

  return (
    <>
      <div className="painelCadastro">
        <HeaderPainel />
      </div>
      <PainelCadastro>
        <div className="painel">
          <Link to="/paineladm">↩ voltar</Link>
          <br />
          <br />
          <PageTitle>Cadastro de Produto</PageTitle>
          <form onSubmit={cadastroProduto}>
            <label>
              <input
                required
                type="text"
                placeholder="Nome do produto"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </label>

            <br />
            <label>
              <input
                type="number"
                name="preco"
                placeholder="R$ "
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                required
              />
            </label>

            <br />
            <label id="photos">
              <span>Selecionar fotos</span>
              <input
                required
                type="file"
                placeholder="Foto"
                name="foto[]"
                multiple
                value={foto}
                onChange={(e) => setFoto(e.target.value)}
              />
            </label>
            <br />
            <label>
              <input
                required
                type="number"
                placeholder="Quantidade"
                name="quantidade"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
              />
            </label>
            <br />
            <label>
              <span>Categorias</span>
              <select
                required
                id="categoria"
                name="categoria"
                placeholder="Categoria"
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option></option>
                {categorias.map((categoria, _id) => (
                  <option key={categoria.nome} value={categoria._id}>
                    {categoria.nome}
                  </option>
                ))}
              </select>
            </label>
            <br />
            <textarea
              required
              id="descricao"
              placeholder="Descrição"
              name="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            ></textarea>
            <br />
            <input id="button" type="submit" name="salvar" value="Salvar" />
          </form>
        </div>
      </PainelCadastro>
    </>
  );
}
