import "./styled.js";

import rendaSalmao from "../../assets/images/renda-salmao.jpg";
import rendaPreta from "../../assets/images/renda-preta.jpg";
import SutiaPreto from "../../assets/images/lingerie-preta.jpg";
import { InfosProdutoStyled } from "./styled";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Link from "../Link/index";
import { currencyFormat } from "../../helpers/currencyFormat";
import { CiShare1 } from "react-icons/ci";
import { SlHeart } from "react-icons/sl";
import {StateContext} from "../../context/StateContext";

interface Produtos {
  nome: string;
  produto_id: string;
  foto: string;
  descricao: string;
  categoria: string;
  categoria_id: number;
  preco: number;
  quantidade: number;
  _id: string;
}

interface ShoppingCartItem {
  produto: Produtos;
  quantidade: number;
}

export const InfosDoProduto = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Produtos>();
  const [produto, setProduto] = useState<Produtos[]>([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`https://gamaxp-desafio4-grupo6.onrender.com/produtos/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log);
  }, [id]);

  const [shoppingCart, setShoppingCart] = useState<ShoppingCartItem[]>([]);


  // const handleAddToCart = (produto_id: string) => {
  //   const item = produto.find((item) => item.produto_id === produto_id);
  //   const cartItem: ShoppingCartItem = {
  //     produto: item!,
  //     quantidade: 1,
  //   };

  //   const newShoppingCart: ShoppingCartItem[] = [...shoppingCart, cartItem];
  //   setShoppingCart(newShoppingCart);
  // };
  const [cart, setCart] = useState<Produtos[]>([]);
  const add = product => () => {
    cart.find(product)
  }

  const [quantidade, setQuantidade] = useState(1);

  const handleDecrement = () => {
    if (quantidade > 1) {
      setQuantidade((prevCount) => prevCount - 1);
    }
  };

  const handleIncrement = () => {
    setQuantidade((prevCount) => prevCount + 1);
  };

  return (
    <InfosProdutoStyled>
      <main className="main-product-container">
        <div className="containerImages">
          <img className="img-produto" src={SutiaPreto} alt="/" />

          <img className="img-produto" src={SutiaPreto} alt="/" />

          <img className="img-produto" src={SutiaPreto} alt="/" />

          <img className="img-produto" src={SutiaPreto} alt="/" />
        </div>

        <div className="container-product-info">
          <div className="text-title">
            <h3> {product ? product.nome : ""}</h3>
            <div className="btn-icons">
              <button className="btn-curtir">
                <SlHeart />
              </button>
              <button className="btn-share">
                <CiShare1 />
              </button>
            </div>
          </div>

          <div className="price-and-promo">
            <div>
              <p className="product-price">
                {product ? currencyFormat(product.preco) : ""}
              </p>
            </div>
          </div>
          <br />
          <div>
            <p className="descricao">Descrição:</p>
            <p>{product ? product.descricao : ""}</p>
          </div>

          <div>
            <h3 className="title-product-color">Color</h3>
          </div>

          <div>
            <button className="btn-product-color" type="button">
              <img className="cover" src={rendaSalmao} alt="#" />
            </button>

            <button className="btn-product-color" type="button">
              <img className="cover" src={rendaPreta} alt="#" />
            </button>
          </div>

          <div>
            <h3 className="title-product-size">Size</h3>
          </div>

          <div className="psb" data-produto="tamanho-attribute">
            <input
              type="radio"
              name="tamanho"
              value="P"
              id="tamanho-attribute-1-"
              className="input"
            />
            <label
              className="btn-choose-size"
              data-text="P"
              data-attribute-value="P"
              data-attribute-name="tamanho"
              data-available="true"
            >
              <span className="text">P</span>
            </label>
            <input
              type="radio"
              name="tamanho"
              value="M"
              id="tamanho-attribute-2-"
              className="input"
            />
            <label
              className="btn-choose-size"
              data-text="M"
              data-attribute-value="M"
              data-attribute-name="tamanho"
              data-available="true"
            >
              <span className="text">M</span>
            </label>
            <input
              type="radio"
              name="tamanho"
              value="G"
              id="tamanho-attribute-3-"
              className="input"
            />
            <label
              className="btn-choose-size"
              data-text="G"
              data-attribute-value="G"
              data-attribute-name="tamanho"
              data-available="true"
            >
              <span className="text">G</span>
            </label>
          </div>

          <div className="btn-qty-add">
            <div>
              <h3 className="quantity-title"> Quantity</h3>
            </div>
            <div className="btn-quantity">
              <button className="quan-buttons" onClick={handleDecrement}>
                -
              </button>
              <div className="quantity-input">{quantidade}</div>
              <button className="quan-buttons" onClick={handleIncrement}>
                +
              </button>
              <div>
                {/* <button className="buttonCart" onClick={() => handleAddToCart}> */}
                <button className="buttonCart" onClick={add(product)}>
                  
                  <Link redirect="/cart" texto="Adicionar ao carrinho"></Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </InfosProdutoStyled>
  );
};
