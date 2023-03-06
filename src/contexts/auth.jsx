import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api, createAdmin, createCategories, createSession, createUser } from "../services/api";
import { toast } from 'react-hot-toast';



export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
      api.defaults.headers.authorization = `Bearer ${token}`;
    }
    setLoading(false);
  }, []);

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

    const loggedUser = response.data.user;
    const token = response.data.token;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setUser(loggedUser);
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
export const CartContext = createContext();

export const StateContext = ({ children }) => {
    const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
    const [itensCarrinho, setItensCarrinho] = useState([]);
    const [precoTotal, setPrecoTotal] = useState();
    const [qtyTotal, setQtyTotal] = useState();
    const [qty, setQty] = useState(1);

    const onAdd = (produto, quantidade) => {
        const checarProdutoSacola = itensCarrinho.find((item) => item._id === produto._id);

        setPrecoTotal((prevPrecoTotal) => prevPrecoTotal + produto.preco + quantidade);
        // setQuantidadeTotal((prevQuantidadeTotal) => prevQuantidadeTotal + quantidade);

        if(checarProdutoSacola) {

            const carrinhoAtualizado = itensCarrinho.map((produtoCarrinho) => {
                if(produtoCarrinho._id === produto._id) return {
                    ...produtoCarrinho,
                    quantidade: produtoCarrinho.quantidade + quantidade
                }
            })

            setItensCarrinho(carrinhoAtualizado);
        } else {
            produto.quantidade = quantidade;

            setItensCarrinho([...itensCarrinho, { ...produto }]);
        }
        toast.success(`${qty} ${produto.name} adicionado ao carrinho.`);
    }

    const aumentarQty = () => {
        setQty((qtyAnterior) => qtyAnterior + 1);
    }

    const diminuirQty = () => {
        setQty((qtyAnterior) => {
            if(qtyAnterior - 1 < 1) return 1;
            return qtyAnterior - 1
        });
    }

    return (
        <CartContext.Provider
            value={{
                mostrarCarrinho,
                itensCarrinho,
                precoTotal,
                qtyTotal,
                qty,
                aumentarQty,
                diminuirQty,
                onAdd
            }}
        >
            {children}
        </CartContext.Provider>
)};


// -------- Context -----------//

// const cadastrarCategoria = async (nome) => {
//   const response = await createCategories(nome);
//   console.log("Cadastrando Categoria", response.data);

//   const signinCategory = response.data.user;
//   const token = response.data.token;
//   api.defaults.headers.authorization = `Bearer ${token}`;
//   setUser(signinCategory);
//   navigate("/categorias");
// };

// const editarCategoria = async (nome, id) => {
//   const response = await editCategories(nome, id);
//   console.log("Editando Categoria", response.data);

//   const signinCategory = response.data.user;
//   const token = response.data.token;
//   api.defaults.headers.authorization = `Bearer ${token}`;
//   setUser(signinCategory);
//   navigate("/categorias/:id");
// };





// return (
//   <AuthContext.Provider
//     value={{
//       cadastrarCategoria,
//       editarCategoria,
//     }}
//   >
//     {children}
//   </AuthContext.Provider>
// );