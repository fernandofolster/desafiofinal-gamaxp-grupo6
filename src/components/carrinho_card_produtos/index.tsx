import { useState } from "react";
import { currencyFormat } from "../../helpers/currencyFormat";

import { CardProdutosCarrinhoStyled } from "./styled";

interface Ecommerce {
  nome: string;
  produto_id: string;
  foto: string;
  descricao: string;
  categoria: string;
  categoria_id: number;
  preco: number;
  quantidade: number;
}

interface ShoppingCartItem {
  produto: Ecommerce;
  quantidade: number;
  preco: number;
}

export function CardProdutosCarrinho() {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartItem[]>([]);

  const handleRemoveFromCart = (produto_id: string) => {
    const item = ecommerce.find((item) => item.produto_id === produto_id);
    const cartItem: ShoppingCartItem = {
      produto: item!,
      quantidade: 1,
      preco: 25,
    };

    const newShoppingCart: ShoppingCartItem[] = [...shoppingCart, cartItem];
    setShoppingCart(newShoppingCart);
  };

  const [ecommerce, setEcommerce] = useState<Ecommerce[]>([]);

  return (
    <div>
      <CardProdutosCarrinhoStyled>
        <div className="text-product-cart">
          {ecommerce.map((product) => {
            return (
              <>
                <img className="img-product-cart" src={product.foto} alt="/" />

                <div>
                  <h4 className="product-title-cart">{product.nome}</h4>

                  <p className="product-size-cart">Tamanho: G</p>

                  <p className="product-quantity-cart">{product.quantidade}</p>

                  <p className="product-price-cart">
                    {" "}
                    {currencyFormat(product.preco)}
                  </p>

                  <button
                    className="product-remove-btn"
                    type="submit"
                    onClick={() => handleRemoveFromCart(product.produto_id)}
                  >
                    <u>Remover</u>
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </CardProdutosCarrinhoStyled>
    </div>
  );
}
