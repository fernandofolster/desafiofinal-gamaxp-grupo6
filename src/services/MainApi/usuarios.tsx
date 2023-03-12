import baseAPI from "./config";

interface userPayload {
  nome: string;
  email: string;
  senha: string;
}

export const createUser = async (payload: userPayload) => {
  return baseAPI.post("/usuarios", payload);
};

export function editUser(_id) {
  return baseAPI.put(`/usuarios/${_id}`);
}

export function removeUser(_id) {
  return baseAPI.delete(`/usuarios/${_id}`);
}

export function getUser() {
  return baseAPI.get("/usuarios");
}
