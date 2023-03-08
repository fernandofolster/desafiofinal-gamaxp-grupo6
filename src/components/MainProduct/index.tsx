import "./styled.js";
import ShareIcon from "../../assets/images/share-Icon.png";
import rendaSalmao from "../../assets/images/renda-salmao.jpg";
import rendaPreta from "../../assets/images/renda-preta.jpg";
import SutiaPreto from "../../assets/images/lingerie-preta.jpg";
import { ProductArea } from "./styled";
import { useState, useEffect } from "react";
import carrinhoProvider from "../../contexts/auth.jsx";
import { data as ecommerce } from "../apiFake/apiFake.jsx"
import Link from "../Link/index";
import { data } from "../apiFake/apiFake";


  
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
  
}

export const MainProduct = () => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartItem[]>([]);

  const handleAddToCart = (produto_id: string) => {
    const item = ecommerce.find((item) => item.produto_id === produto_id);
    const cartItem: ShoppingCartItem  = {
      produto: item!,
      quantidade: 1,
    }

    const newShoppingCart: ShoppingCartItem[] = [...shoppingCart, cartItem];
    setShoppingCart(newShoppingCart)
  };

  const [product, setProduct] = useState(ecommerce);

  return (
    // <carrinhoProvider>
    <ProductArea>
      <main className="main-product-container">
              <div className="containerImages">
        {product.map((product) => {
          return (
            <>
                <img className="img-produto" src={product.foto} alt="/" />

                <img className="img-produto" src={product.foto} alt="/" />

                <img className="img-produto" src={product.foto} alt="/" />

                <img className="img-produto" src={product.foto} alt="/" />
              </>
                );
              })}
              </div>
             

        <div className="container-product-info">
          {product.map((product) => {
            return (
              <>
                <div className="text-title">
                  <h3> {product.nome} </h3>
                  <section className="btn-icons">
                    <span>
                      <button className="btn-curtir">
                        <div>
                          <svg aria-label="Curtir" className="heart-icon">
                            <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                          </svg>
                        </div>
                      </button>
                    </span>

                    <span>
                      <button className="btn-share">
                        <div>
                          <img
                            className="share-icon"
                            src={ShareIcon}
                            alt="share-icon"
                            id="share-icon"
                          />
                        </div>
                      </button>
                    </span>
                  </section>
                </div>

                <div className="price-and-promo">
                  <div>
                    <p className="product-price">R${product.preco}</p>
                  </div>
                  <div className="promo-component">
                    <p>or 4 interested-free payment of R$25.00.</p>
                    <a href="/">Learn more</a>
                  </div>
                </div>

                <div>
                  <p className="ProductInfomation">{product.descricao}</p>
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

                <div>
                  {/* {shoppingCart.map((product) => {
                    return (
                      <> */}
                        <div>
                          <h3 className="quantity-title"> Quantity</h3>
                        </div>
                        <div className="btn-quantity">
                          <button className="quan-buttons">minus</button>
                          <input
                            className="quantity-input"
                            type="number"
                            value="0"
                            min="1"
                            max="100"
                            
                          ></input>
                          <button className="quan-buttons">plus</button>
                          <div>
                            <button
                              className="buttonCart"
                              onClick={() => handleAddToCart(product.produto_id)}
                            >
                              <Link
                                redirect="/cart"
                                texto="Adicionar ao carrinho"
                              ></Link>
                            </button>
                          </div>
                        </div>
                      {/* </>
                    );
                  })} */}
                </div>
              </>
            );
          })}
        </div>
      </main>
    </ProductArea>
    // </carrinhoProvider>
  );
};

