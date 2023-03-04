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

// Produtos 

export const listProducts =  async () => {
  return api.get("/produtos");
}

export const createProducts =  async (nome, foto, descricao, categoria, preco) => {
  return api.post("/produtos", { nome, foto, descricao, categoria, preco, admin: true});
}

export const editProducts =  async (nome, foto, descricao, categoria, preco, id) => {
  return api.put("/produtos/:id", { nome, foto, descricao, categoria, preco, id, admin: true});
}

export const removeProducts =  async (id) => {
  return api.delete("/produtos/:id", {id, admin: true});
}




// Categorias

export const listCategories =  async () => { 
  return api.get("/categorias");
}

export const listCategoriesById =  async (id) => {
  return api.get("/categorias:id", { id });
}

export const createCategories =  async (nome) => {
  return api.post("/categorias", { nome, admin: true });
}

export const editCategories =  async (nome, id) => {
  return api.put("/categorias/:id", { nome, id, admin: true });
}

export const removeCategories =  async (id) => {
  return api.delete("/categorias/:id", { id, admin: true });
}

// Vendas //  Perguntar se essa lista será para uso do cliente ou adm e se terá crud para vendas.

export const listVendas =  async () => { 
  return api.get("/vendas");
}

export const crateVendas =  async (produtos, id, quantidade) => {
  return api.post("/vendas", { produtos, id, quantidade });
}

export const editVendas =  async (id, nome) => {
  return api.put("/vendas/:id", { id, nome });
}

export const removeVendas =  async (id) => {
  return api.delete("/vendas/:id", { id });
}