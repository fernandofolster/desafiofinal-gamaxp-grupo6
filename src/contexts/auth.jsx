import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  const login = async (email, senha) => {
    const response = await createSession(email, senha);
    const token = response.headers.token;
    const loggedUser = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(loggedUser));
    api.defaults.headers.authorization = `Bearer ${token}`;
    if (response.status === 200) {
      setUser(loggedUser);
      return navigate("/");
    } else {
      alert("Email ou senha inválidos");
      return navigate("/login");
    }
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
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
