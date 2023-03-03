import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api, createAdmin, createSession, createUser } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
      api.defaults.headers.authorization = `Bearer ${token}`;
    }
    setLoading(false);
  }, []);

  const cadastrarUsuario = async (nome, email, senha) => {
    const response = await createUser(nome, email, senha);
    console.log("Cadastrando Usuario", response.data);

    const signinUser = response.data.user;
    const token = response.data.token;
    api.defaults.headers.authorization = `Bearer ${token}`;
    setUser(signinUser);
    navigate("/login");
  };

  const cadastrarAdmin = async (nome, email, senha) => {
    const response = await createAdmin(nome, email, senha);
    console.log("Cadastrando Administrador", response.data);

    const signinAdm = response.data.user;
    const token = response.data.token;
    api.defaults.headers.authorization = `Bearer ${token}`;
    setUser(signinAdm);
    navigate("/login");
  };

  const login = async (email, senha) => {
    const response = await createSession(email, senha);
    console.log("login", response.data);

    const loggedUser = response.data.user;
    const token = response.data.token;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setUser(loggedUser);
    navigate("/paineladm");
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    api.defaults.headers.authorization = null;
    setUser("");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        loading,
        login,
        logout,
        cadastrarUsuario,
        cadastrarAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
