import axios from "axios";

export const api = axios.create({
  baseURL: "https://gamaxp-desafio4-grupo6.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const createSession = async (email, senha) => {
  return api.post("/login", { email, senha });
};

export const createCategory = async (nome) => {
  return api.post("/categorias", { nome });
};

interface productPayload {
  nome: string;
  preco: number;
  foto: [];
  categoria: string;
  descricao: string;
}

export const createProduct = async (payload: productPayload) => {
  return api.post("/produtos", payload);
};

interface adminPayload {
  nome: string;
  email: string;
  senha: string;
  admin: true;
}

export const createAdmin = async (payload: adminPayload) => {
  return api.post("/usuarios/admin", payload);
};

interface userPayload {
  nome: string;
  email: string;
  senha: string;
}

export const createUser = async (payload: userPayload) => {
  return api.post("/usuarios", payload);
};

export const editUser = async () => {
  return api.put("/usuarios/:id");
};

export const removeUser = async () => {
  return api.delete("/usuarios:id");
};

export const getUser = async () => {
  return api.get("/usuarios");
};

export default api;
