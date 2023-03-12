import baseAPI from "./config";

export interface productPayload {
  nome: string;
  preco: any;
  quantidade: any;
  foto: any;
  categoria: any;
  descricao: string;
}

export const createProduct = async (payload: productPayload) => {
  return baseAPI.post("/produtos", payload);
};

export function editProduct() {
  return baseAPI.put("/produtos/id");
}

export function removeProduct() {
  return baseAPI.delete("/produtos/id");
}

export function listProduct() {
  return baseAPI.get("/produtos");
}
