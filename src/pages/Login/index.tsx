import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { PageTitle, ErrorMessage } from "../../components/HeaderPainel";
import "../../styles/global.js";
import { Login } from "./styled";
import useAPI from "../../helpers/testeAPI";
import { doLogin } from "../../helpers/authHandler";

export default function PageLogin() {
  const api = useAPI();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);

    const json = await api.login(email, password);

    if (json.error) {
      setError(json.error);
    } else {
      doLogin(json.token, rememberPassword);
      window.location.href = "/";
    }
    setDisabled(false);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Login>
          <div className="container">
            {error && <ErrorMessage>{error}</ErrorMessage>}

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
                    disabled={disabled}
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
                    disabled={disabled}
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
                    disabled={disabled}
                    checked={rememberPassword}
                    onChange={() => setRememberPassword(!rememberPassword)}
                  />
                  <span className="switch-button"></span>
                </div>
              </label>
              <label className="area">
                <div className="area--input">
                  <button disabled={disabled}>Fazer login</button>
                </div>
              </label>
              <br />
              <p>ou Crie sua conta</p>
            </form>
          </div>
        </Login>
      </main>
      <Footer />
    </div>
  );
}
