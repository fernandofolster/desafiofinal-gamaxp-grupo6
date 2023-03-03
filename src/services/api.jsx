import axios from "axios";

export const api = axios.create({
  baseURL: "https://gamaxp-desafio4-grupo6.onrender.com",
});

export const createSession = async (email, senha) => {
  return api.post("/login", { email, senha });
};

export const createAdmin = async (nome, email, senha) => {
  return api.post("/usuarios/admin", { nome, email, senha, admin: true });
};

export const createUser = async (nome, email, senha) => {
  return api.post("/usuarios", { nome, email, senha });
};

export const editUser = async (nome, email, senha) => {
  return api.put("/usuarios/:id", { nome, email, senha });
};

export const removeUser = async (nome, email, senha) => {
  return api.delete("/usuarios:id", { nome, email, senha });
};

export const getUser = async () => {
  return api.get("/usuarios");
};
