import "../../styles/global.js";
import { Link } from "react-router-dom";
import { PainelTabela } from "./styled";
import { useEffect, useState } from "react";
import { listProduct, removeProduct } from "../../services/MainApi/produtos";
import { currencyFormat } from "../../helpers/currencyFormat";
import { getCategory } from "../../services/MainApi/categorias";

interface Produto {
  nome: string;
  preco: number;
  quantidade: number;
  foto: any;
  categoria: any;
  descricao: string;
  _id: string;
}

export default function ListarProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await listProduct();
        setProdutos(response.data);
      } catch (error) {
        alert("Deu algo errado");
      }
    })();
  }, [setProdutos]);

  async function deleteProduct(_id) {
    if (window.confirm("Deseja realmente excluir este produto?")) {
      try {
        await removeProduct(_id).then(() => {
          setProdutos(produtos.filter((produtos) => produtos._id !== _id));
          alert("Produto removido com sucesso");
        });
      } catch (error) {
        alert("Algo deu errado");
      }
    }
  }

  interface Categoria {
    nome: string;
    id: any;
  }

  const [categoria, setCategoria] = useState<Categoria[]>([]);

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

  return (
    <PainelTabela>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Nome do produto</th>
              <th>Categoria - id</th>
              <th>Preço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produtos, _id) => (
              <>
                <tr key={produtos._id}>
                  <td>{produtos.nome}</td>
                  <td>{produtos.categoria}</td>
                  <td>{currencyFormat(produtos.preco)}</td>
                  <td>
                    <button className="btnD">
                      <Link to={`/paineladmdetalhe/${produtos._id}`}>
                        ver detalhes
                      </Link>
                    </button>
                    <button
                      value={produtos._id}
                      className="btnE"
                      onClick={() => deleteProduct(produtos._id)}
                    >
                      excluir
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </PainelTabela>
  );
}
