import { useState } from "react";
import Header from "../../components/Header";
import { PageTitle } from "../../components/HeaderPainel";
import "../../styles/global";
import { Cadastro } from "./styled";
import Footer from "../../components/Footer";
import { createAdmin } from "../../services/MainApi/admin";

export default function PageCadastroAdm() {
  const cadastro = async (event) => {
    event.preventDefault();

    const payload = {
      nome,
      email,
      senha,
      admin: true,
    };

    try {
      const response = await createAdmin(payload);
      if (response.status !== 201) {
        return alert("Deu algo errado");
      }
      alert("Admin cadastrado com sucesso");
    } catch (error) {
      alert("Deu algo errado");
    }
  };

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div className="App">
      <Header />
      <main>
        <Cadastro>
          <div className="container">
            <form onSubmit={cadastro}>
              <PageTitle>Cadastro - Admin</PageTitle>
              <label className="area-name">
                <div>
                  <input
                    className="area--input"
                    required
                    type="text"
                    name="name"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                </div>
              </label>
              <br />
              <label className="area">
                <div className="area--input">
                  <button type="submit">Cadastro</button>
                </div>
              </label>
              <br />
            </form>
          </div>
        </Cadastro>
      </main>
      <Footer />
    </div>
  );
}
