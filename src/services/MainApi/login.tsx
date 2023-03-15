import baseAPI from "./config";

interface Credentials {
  email: string;
  senha: string;
}

interface User {
  nome: string;
  email: string;
  senha: string;
  _id: string;
  admin: false;
}

interface Admin {
  nome: string;
  email: string;
  senha: string;
  _id: string;
  admin: false;
}

type Token = string;

export const login = (credentials: Credentials) => {
  baseAPI
    .post<User & { token: Token }>("/login", credentials)
    .then((res) => res.data);
};

/*const login = async (email, senha) => {
  const response = await createSession(email, senha);
  console.log("login", response.data);
  const token = response.headers.token;
  localStorage.setItem("token", token);
  api.defaults.headers.authorization = `Bearer ${token}`;
  if (response.status !== 200) {
    alert("Email ou senha inválidos");
  } else {
    return navigate("/");
  }
};*/
