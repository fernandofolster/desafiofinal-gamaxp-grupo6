import { useState, useEffect } from "react";
import { data } from "../apiFake/apiFake";
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

  const { ecommerce } = data;
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

    const [product, setProduct] = useState(ecommerce);

  return (
    <div>
      <CardProdutosCarrinhoStyled>
        <div className="text-product-cart">
          {product.map((product) => {
            return (
              <>
                <img className="img-product-cart" src={product.foto} alt="/" />

                <div>
                  <h4 className="product-title-cart">{product.nome}</h4>

                  <p className="product-size-cart">Tamanho: G</p>

                  <p className="product-quantity-cart">{product.quantidade}</p>

                  <p className="product-price-cart">R$ {product.preco}</p>

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
