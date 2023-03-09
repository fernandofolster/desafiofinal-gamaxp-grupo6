import "../../styles/global.js";
import { Link } from "react-router-dom";
import { PainelTabela } from "./styled";
import { useEffect, useState } from "react";
import { listProduct } from "../../services/MainApi/produtos";
import { getCategory } from "../../services/MainApi/categorias";

interface Produto {
  nome: string;
  preco: number;
  quantidade: number;
  foto: any;
  categoria: any;
  descricao: string;
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

  interface Categoria {
    nome: string;
    id: any;
  }

  const [categorias, setCategoria] = useState<Categoria[]>([]);

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
            {produtos.map((produtos, nome) => (
              <>
                <tr key={nome}>
                  <td>{produtos.nome}</td>
                  <td>{produtos.categoria}</td>
                  <td>{produtos.preco}</td>
                  <td>
                    <button className="btnD">
                      <Link to="/paineladmdetalhe">ver detalhes</Link>
                    </button>
                    <button className="btnE">excluir</button>
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
