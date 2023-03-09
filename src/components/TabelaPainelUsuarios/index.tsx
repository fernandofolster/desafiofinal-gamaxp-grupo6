import "../../styles/global.js";
//import { Link } from "react-router-dom";
import { PainelTabelaUser } from "./styled";
import { useEffect, useState } from "react";
import { getUser, removeUser } from "../../services/MainApi/usuarios";

interface Usuario {
  nome: string;
  email: string;
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

  async function handleDelete() {
    if (window.confirm("Deseja realmente excluir este usuário?")) {
      const response = await removeUser();
      console.log(response);
      if (response.status !== 204) {
        return alert("Deu algo errado");
      }
    } else {
      alert("Deu tudo certo");
    }
  }

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
            {usuarios.map((usuario, _id) => (
              <tr key={_id.toString()}>
                <td>{usuario.nome}</td>
                <td>{usuario.email}</td>
                <td>{usuario._id}</td>
                <td>
                  <button
                    value={usuario._id}
                    className="btnE"
                    onClick={(e) => handleDelete()}
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
