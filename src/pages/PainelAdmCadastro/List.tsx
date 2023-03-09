import { useEffect, useState } from "react";
import { listProduct } from "../../services/MainApi/produtos";

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

  return (
    <main className="container card my-5 p-5">
      <h1>Lista de produtos</h1>
      <ul className="list-group">
        {produtos.map((categoria) => (
          <li className="list-group-item">{categoria.nome}</li>
        ))}
      </ul>
    </main>
  );
}
