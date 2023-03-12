import "../../styles/global.js";
//import { Link } from "react-router-dom";
import { PainelTabelaUser } from "./styled";
import { useEffect, useState } from "react";
import { getUser, removeUser } from "../../services/MainApi/usuarios";

interface Usuario {
  nome: string;
  email: string;
  senha: string;
  _id: string;
}

export default function ListarUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getUser();
        setUsuarios(response.data);
      } catch (error) {
        alert("Deu algo errado");
      }
    })();
  }, [setUsuarios]);

  const handleDelete = async (_id: string) => {
    if (window.confirm("Deseja realmente excluir este usuário?")) {
      console.log("ID selecionado: ", _id);
      const filterRemove = usuarios.filter((usuarios) => usuarios._id !== _id);
      setUsuarios(filterRemove);
      const res = await removeUser();
      if (res.status !== 204) {
        return alert("Deu algo errado");
      }
    } else {
      alert("Deu tudo certo");
    }
  };

  return (
    <PainelTabelaUser>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>ID</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuarios, k) => (
              <tr key={k}>
                <td>{usuarios.nome}</td>
                <td>{usuarios.email}</td>
                <td>{usuarios._id}</td>
                <td>
                  <button
                    type="button"
                    value={usuarios._id}
                    className="btnE"
                    onClick={() => handleDelete(usuarios._id)}
                  >
                    excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PainelTabelaUser>
  );
}
