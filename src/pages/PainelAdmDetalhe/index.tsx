import { useState, useEffect } from "react";
import HeaderPainel from "../../components/HeaderPainel";
import "../../styles/global.js";
import { PageTitle } from "../../components/HeaderPainel";
import { PainelCadastro } from "./styled";
import { Link, useParams } from "react-router-dom";
import { currencyFormat } from "../../helpers/currencyFormat";
import { getCategory } from "../../services/MainApi/categorias";
import { editProducts } from "../../services/api";

interface Produto {
  nome: string;
  preco: number;
  quantidade: number;
  foto: any;
  categoria: any;
  descricao: string;
  _id: string;
}

interface Categoria {
  nome: string;
  _id: any;
}

export default function PainelAdmDetalhe() {
  const { id } = useParams();

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`https://gamaxp-desafio4-grupo6.onrender.com/produtos/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProdutos(data);
      })
      .catch((error) => error);
  }, [id]);

  const [categorias, setCategoria] = useState<Categoria>();
  const [produtos, setProdutos] = useState<Produto>();

  useEffect(() => {
    (async () => {
      try {
        const response = await getCategory();
        setCategoria(response.data);
      } catch (error) {
        alert("Deu algo errado");
      }
    })();
  }, [setCategoria]);

  async function editProduct(_id) {
    try {
      await editProducts(_id)
        .then((resp) => resp.data())
        .then((data) => {
          setProdutos(data);
          alert("Produto atualizado com sucesso");
        });
    } catch (error) {
      alert("Algo deu errado");
    }
  }

  return (
    <>
      <div className="painelCadastro">
        <HeaderPainel />
      </div>
      <PainelCadastro>
        <div className="container">
          <div className="painel">
            <Link to="/paineladm">↩ voltar</Link>
            <br />
            <br />
            <PageTitle>Detalhe do Produto</PageTitle>
            <form>
              <>
                <label>
                  <input
                    type="text"
                    placeholder="Nome do produto"
                    name="nome"
                    value={produtos ? produtos.nome : ""}
                  />
                </label>

                <br />
                <input
                  type="text"
                  placeholder="Preço"
                  name="preco"
                  value={produtos ? currencyFormat(produtos.preco) : ""}
                />
                <br />
                <input type="text" placeholder="Foto" name="foto" />
                <br />
                <input
                  type="text"
                  placeholder="Quantidade"
                  name="quantidade"
                  value={produtos ? produtos.quantidade : ""}
                />
                <br />
                <select
                  required
                  id="categoria"
                  name="categoria"
                  placeholder="Categoria"
                >
                  <option>{produtos ? produtos.categoria : ""}</option>
                </select>
                <br />
                <input
                  type="text"
                  id="descricao"
                  placeholder="Descrição"
                  name="descricao"
                  value={produtos ? produtos.descricao : ""}
                />
                <br />
                <input
                  id="btnSalvar"
                  type="submit"
                  name="salvar"
                  value="Salvar"
                  onClick={() => editProduct(id)}
                />
              </>
            </form>
          </div>
          <div className="foto">foto do produto</div>
        </div>
      </PainelCadastro>
    </>
  );
}
