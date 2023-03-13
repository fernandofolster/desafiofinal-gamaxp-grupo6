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

export function editProduct(_id) {
  return baseAPI.put(`/produtos/${_id}`);
}

export function removeProduct(_id) {
  return baseAPI.delete(`/produtos/${_id}`);
}

export function listProduct() {
  return baseAPI.get("/produtos");
}

export function listProductID(id) {
  return baseAPI.get(`/produtos/${id}`);
}
