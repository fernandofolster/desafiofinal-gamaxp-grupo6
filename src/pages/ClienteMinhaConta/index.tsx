import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { PageTitle } from "../../components/HeaderPainel";
import { getUser } from "../../services/MainApi/usuarios";

import "../../styles/global";

function ClienteMinhaConta() {
  interface Usuario {
    nome: string;
    email: string;
    senha: string;
    _id: string;
    admin: true;
  }

  const [usuarios, setUsuarios] = useState<Usuario>();

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
      <Header />
      <PageTitle>Seja bem vindo, {usuarios ? usuarios.nome : ""}</PageTitle>
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
