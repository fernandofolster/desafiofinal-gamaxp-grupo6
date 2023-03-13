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

export function removeCategory(_id) {
  return baseAPI.delete(`/categorias/${_id}`);
}
