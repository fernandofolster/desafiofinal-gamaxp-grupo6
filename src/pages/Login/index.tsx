import { useState, useContext } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
<<<<<<< HEAD
import { PageTitle } from "../../components/HeaderPainel";
import "../../styles/global.css";
import { PageLogin } from "./styled";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
=======
import { PageTitle, ErrorMessage } from "../../components/HeaderPainel";
import "../../styles/global.js";
import { Login } from "./styled";
import useAPI from "../../helpers/testeAPI";
import { doLogin } from "../../helpers/authHandler";
>>>>>>> f4f95ba46a6e676cfb35a3ad102a71f91dc257c9

export default function Login() {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="login">
      <Header />
      <main>
        <PageLogin>
          <div className="container">
            <form onSubmit={handleSubmit}>
              <PageTitle>Faça seu Login</PageTitle>
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </label>
              <br />
              <label className="switch">
                <span className="switch-text">Lembrar senha</span>
                <div className="switch-wrapper">
                  <input
                    type="checkbox"
                    checked={rememberPassword}
                    onChange={(e) => setRememberPassword(!rememberPassword)}
                  />
                  <span className="switch-button"></span>
                </div>
              </label>
              <label className="area">
                <div className="area--input">
                  <button>Fazer login</button>
                </div>
              </label>
              <br />
              <label>
                <Link to="/signup">ou Crie sua conta</Link>
              </label>
            </form>
          </div>
        </PageLogin>
      </main>
      <Footer />
    </div>
  );
}
