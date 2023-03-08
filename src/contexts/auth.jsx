import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api, createAdmin, createSession, createUser } from "../services/api";
//import { toast } from "react-hot-toast";
import {
  createCategories,
  removeCategories,
  listCategories,
  listCategoriesById,
  editCategories,
} from "../services/api";
//import { MainProduct } from "../components/MainProduct";*/

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  /*useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
      api.defaults.headers.authorization = `Bearer ${token}`;
    }
    setLoading(false);
  }, []);*/

  const cadastrarUsuario = async (nome, email, senha) => {
    const response = await createUser(nome, email, senha);
    console.log("Cadastrando Usuario", response.data);
    const signinUser = response.data.user;
    const token = response.data.token;
    api.defaults.headers.authorization = `Bearer ${token}`;
    setUser(signinUser);
    navigate("/login");
  };

  const cadastrarAdmin = async (nome, email, senha) => {
    const response = await createAdmin(nome, email, senha);
    console.log("Cadastrando Administrador", response.data);
    const signinAdm = response.data.user;
    const token = response.data.token;
    api.defaults.headers.authorization = `Bearer ${token}`;
    setUser(signinAdm);
    navigate("/login");
  };

  const login = async (email, senha) => {
    const response = await createSession(email, senha);
    console.log("login", response.data);
    const token = response.headers.token;
    localStorage.setItem("token", token);
    api.defaults.headers.authorization = `Bearer ${token}`;
    navigate("/paineladm");
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    api.defaults.headers.authorization = null;
    setUser("");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        loading,
        login,
        logout,
        cadastrarUsuario,
        cadastrarAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ---------->>>>> CONTEXT CARRINHO <<<<<----------
/*export const CartContext = createContext({
  itens: [],
  getQuantidadeProduto: () => {},
  adicionarUmCarrinho: () => {},
  removerUmCarrinho: () => {},
  deletarCarrinho: () => {},
  getValorTotal: () => {},
});

export const carrinhoProvider = ({ children }) => {
  const [itensCarrinho, setItensCarrinho] = useState([]);

  function getQuantidadeProduto(produto_id) {
    const quantidade = itensCarrinho.find(
      (MainProduct) => MainProduct.produto_id === produto_id
    )?.quantidade;

    if (quantidade === undefined) {
      return 0;
    }
    return quantidade;
  }

  function adicionarUmCarrinho(produto_id) {
    const quantidade = getQuantidadeProduto(produto_id);

    if (quantidade === 0) {
      // produto não está no carrinho
      setItensCarrinho([
        ...itensCarrinho,
        {
          id: produto_id,
          quantidade: 1,
        },
      ]);
    } else {
      // produto está no carrinho
      setItensCarrinho(
        itensCarrinho.map((MainProduct) =>
          MainProduct.produto_id === produto_id
            ? { ...MainProduct, quantidade: MainProduct.quantidade + 1 }
            : MainProduct
        )
      );
    }
  }

  function removerUmCarrinho(produto_id) {
    const quantidade = getQuantidadeProduto(produto_id);

    if (quantidade == 1) {
      deletarCarrinho(produto_id);
    } else {
      setItensCarrinho(
        itensCarrinho.map((MainProduct) =>
          MainProduct.produto_id === produto_id
            ? { ...MainProduct, quantidade: MainProduct.quantidade - 1 }
            : MainProduct
        )
      );
    }
  }

  function deletarCarrinho(produto_id) {
    setItensCarrinho((itensCarrinho) =>
      itensCarrinho.filter((produtoAtual) => {
        produtoAtual.produto_id != produto_id;
      })
    );
  }

  function getValorTotal() {
    let valorTotal = 0;
    itensCarrinho.map((itemCarrinho) => {
      const productData = getProductData(itemCarrinho.produto_id);
      valorTotal += productData.preco * itemCarrinho.quantidade;
    });
    return valorTotal;
  }

  const contextValue = {
    itens: itensCarrinho,
    getQuantidadeProduto,
    adicionarUmCarrinho,
    removerUmCarrinho,
    deletarCarrinho,
    getValorTotal,
  };

  return (
    <CartContext.Provider value={{ contextValue }}>
      {children}
    </CartContext.Provider>
  );
};

export default carrinhoProvider;

*/ // -------- Context Category -----------//

const CategoryContext = createContext();

export const ContextCategory = ({ children }) => {
  const criarCategoria = async (nome) => {
    const response = await createCategories(nome);
    console.log("Criando Categoria", response.data);
  };

  const editarCategoria = async (nome, id) => {
    const response = await editCategories(nome, id);
    console.log("Editando Categoria", response.data);
  };

  const deletarCategoria = async (id) => {
    const response = await removeCategories(id);
    console.log("Removendo Categoria", response.data);
  };

  const listarCategoria = async () => {
    const response = await listCategories();
    console.log("Listando Categoria", response.data);
  };

  const listarCategoriaById = async (id) => {
    const response = await listCategoriesById(id);
    console.log("Listando Id de Categoria", response.data);
  };

  return (
    <CategoryContext.Provider
      value={{
        criarCategoria,
        editarCategoria,
        deletarCategoria,
        listarCategoria,
        listarCategoriaById,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
