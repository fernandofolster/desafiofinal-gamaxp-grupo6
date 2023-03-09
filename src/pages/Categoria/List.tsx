import { useEffect, useState } from "react";
import { getCategory } from "../../services/MainApi/categorias";

interface Categoria {
  nome: string;
}

export default function ListarCategoria() {
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
    <main className="container card my-5 p-5">
      <h1>Lista de categorias</h1>
      <ul className="list-group">
        {categorias.map((categoria) => (
          <li className="list-group-item">{categoria.nome}</li>
        ))}
      </ul>
    </main>
  );
}
