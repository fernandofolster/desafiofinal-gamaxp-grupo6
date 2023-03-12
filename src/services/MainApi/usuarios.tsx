import baseAPI from "./config";

interface userPayload {
  nome: string;
  email: string;
  senha: string;
}

export const createUser = async (payload: userPayload) => {
  return baseAPI.post("/usuarios", payload);
};

export function editUser() {
  return baseAPI.put("/usuarios/id");
}

export function removeUser() {
  return baseAPI.delete("/usuarios/id");
}

export function getUser() {
  return baseAPI.get("/usuarios");
}
