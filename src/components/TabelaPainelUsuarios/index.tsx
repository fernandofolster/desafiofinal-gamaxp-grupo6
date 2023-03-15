import "../../styles/global.js";
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

  async function handleDelete(_id) {
    if (window.confirm("Deseja realmente excluir este usuário?")) {
      try {
        await removeUser(_id).then(() => {
          setUsuarios(usuarios.filter((usuarios) => usuarios._id !== _id));
          alert("Usuário removido com sucesso");
        });
      } catch (error) {
        alert("Algo deu errado");
      }
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
            {usuarios.map((usuarios, k) => (
              <tr key={usuarios._id}>
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
