import { useState, useContext } from "react";
import Header from "../../components/Header";
import { PageTitle } from "../../components/HeaderPainel";
import "../../styles/global";
import { Cadastro } from "./styled";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import Footer from "../../components/Footer";

export default function PageCadastro() {
  const { cadastrarUsuario } = useContext(AuthContext);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Criando usuário", { nome, email, senha });
    cadastrarUsuario(nome, email, senha);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Cadastro>
          <div className="container">
            <form onSubmit={handleSubmit}>
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
                  <button>Fazer cadastro</button>
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
