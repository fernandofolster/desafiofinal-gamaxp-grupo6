import { useState } from "react";
import Header from "../../components/Header";
import { PageTitle } from "../../components/HeaderPainel";
import "../../styles/global";
import { Cadastro } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { createUser } from "../../services/MainApi/usuarios";

export default function PageCadastro() {
  const navigate = useNavigate();
  const cadastroUser = async (event) => {
    event.preventDefault();

    const payload = {
      nome,
      email,
      senha,
    };
    try {
      const response = await createUser(payload);
      if (response.status !== 201) {
        return alert("Deu algo errado");
      }
      alert("Usuário cadastrado com sucesso");
      navigate("/login");
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
            <form onSubmit={cadastroUser}>
              <PageTitle>Faça seu Cadastro</PageTitle>
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
                  <button type="submit">Fazer cadastro</button>
                </div>
              </label>
              <br />
              <label>
                <Link to="/login">Já possui cadastro? Faça seu login</Link>
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
