import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../contexts/auth";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [precoTotal, setPrecoTotal] = useState();
  const [qtyTotal, setQuantidadeTotal] = useState();
  const [qty, setQty] = useState(1);

  const onAdd = (produto, quantidade) => {
    const checarProdutoSacola = itensCarrinho.find(
      (item) => item._id === produto._id
    );

    setPrecoTotal(
      (prevPrecoTotal) => prevPrecoTotal + produto.preco + quantidade
    );
    setQuantidadeTotal(
      (prevQuantidadeTotal) => prevQuantidadeTotal + quantidade
    );

    if (checarProdutoSacola) {
      const carrinhoAtualizado = itensCarrinho.map((produtoCarrinho) => {
        if (produtoCarrinho._id === produto._id)
          return {
            ...produtoCarrinho,
            quantidade: produtoCarrinho.quantidade + quantidade,
          };
      });

      setItensCarrinho(carrinhoAtualizado);
    } else {
      produto.quantidade = quantidade;

      setItensCarrinho([...itensCarrinho, { ...produto }]);
    }
    toast.success(`${qty} ${produto.name} adicionado ao carrinho.`);
  };

  const aumentarQty = () => {
    setQty((qtyAnterior) => qtyAnterior + 1);
  };

  const diminuirQty = () => {
    setQty((qtyAnterior) => {
      if (qtyAnterior - 1 < 1) return 1;
      return qtyAnterior - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        mostrarCarrinho,
        itensCarrinho,
        precoTotal,
        qtyTotal,
        qty,
        aumentarQty,
        diminuirQty,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(AuthContext);
