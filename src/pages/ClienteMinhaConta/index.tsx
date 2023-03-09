import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import HeaderLoginCliente from "../../components/HeaderLoginCliente";
import { PageTitle } from "../../components/HeaderPainel";
import { getUser } from "../../services/MainApi/usuarios";
//import { Link } from "react-router-dom";

import "../../styles/global";

interface Usuario {
  nome: string;
  email: string;
  senha: string;
  _id: any;
}

function ClienteMinhaConta() {
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

  return (
    <div className="App">
      <HeaderLoginCliente />
      <PageTitle>Seja bem vindo, {} </PageTitle>
      <form>
        <label className="area-name">
          <div>
            <input
              className="area--input"
              required
              type="text"
              name="name"
              placeholder="Digite seu nome"
            />
          </div>
        </label>
        <br />
        <label className="area-email">
          <div>
            <input
              className="area--input"
              required
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
            />
          </div>
        </label>
        <br />
        <label className="area-senha">
          <div>
            <input
              className="area--input"
              required
              type="password"
              name="senha"
              placeholder="Digite sua senha"
            />
          </div>
        </label>
      </form>
      <Footer />
    </div>
  );
}

export default ClienteMinhaConta;
