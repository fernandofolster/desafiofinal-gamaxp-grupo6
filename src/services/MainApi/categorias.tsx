import baseAPI from "./config";

interface categoriaPayload {
  nome: string;
}

export function createCategory(payload: categoriaPayload) {
  return baseAPI.post("/categorias", payload);
}

export function getCategory() {
  return baseAPI.get("/categorias");
}
