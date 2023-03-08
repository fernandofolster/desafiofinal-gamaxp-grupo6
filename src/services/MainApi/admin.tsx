import baseAPI from "./config";

interface adminPayload {
  nome: string;
  email: string;
  senha: string;
  admin: true;
}

export const createAdmin = async (payload: adminPayload) => {
  return baseAPI.post("/usuarios/admin", payload);
};
