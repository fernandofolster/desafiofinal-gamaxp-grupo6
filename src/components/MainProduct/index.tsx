import "./styled.js";
import ShareIcon from "../../assets/images/share-Icon.png";
import rendaSalmao from "../../assets/images/renda-salmao.jpg";
import rendaPreta from "../../assets/images/renda-preta.jpg";
import SutiaPreto from "../../assets/images/lingerie-preta.jpg";
// import { api, listProducts } from "../services/api";
import { ProductArea } from "./styled";
import { useState, useEffect } from "react";
import Link from "../Link/index";

export function MainProduct() {
  const ecommerce = [
    {
      nome: "Produto 1",
      produto_id: "Prod_1",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "sutiã",
      categoria_id: 1,
      preco: 5,
      quantidade: 100,
    },
    {
      nome: "Produto 2",
      produto_id: "Prod_2",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "calcinha",
      categoria_id: 2,
      preco: 5,
      quantidade: 100,
    },
    {
      nome: "Produto 3",
      produto_id: "Prod_3",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "pijama",
      categoria_id: 3,
      preco: 5,
      quantidade: 100,
    },
    {
      nome: "Produto 4",
      produto_id: "Prod_4",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "sutiã",
      categoria_id: 1,
      preco: 5,
      quantidade: 100,
    },
    {
      nome: "Produto 5",
      produto_id: "Prod_5",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "calcinha",
      categoria_id: 2,
      preco: 5,
      quantidade: 100,
    },

    {
      nome: "Produto 6",
      produto_id: "Prod_6",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "pijama",
      categoria_id: 3,
      preco: 5,
      quantidade: 100,
    },
    {
      nome: "Produto 7",
      produto_id: "Prod_7",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "sutiã",
      categoria_id: 1,
      preco: 5,
      quantidade: 100,
    },
    {
      nome: "Produto 8",
      produto_id: "Prod_8",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "calcinha",
      categoria_id: 2,
      preco: 5,
      quantidade: 100,
    },
    {
      nome: "Produto 9",
      produto_id: "Prod_9",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "pijama",
      categoria_id: 3,
      preco: 5,
      quantidade: 100,
    },
    {
      nome: "Produto 10",
      produto_id: "Prod_10",
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "sutiã",
      categoria_id: 1,
      preco: 5,
      quantidade: 100,
    },

    {
      nome: "Produto 11",
      produto_id: "Prod_11",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "calcinha",
      categoria_id: 2,
      preco: 5,
      quantidade: 100,
    },
    {
      nome: "Produto 12",
      produto_id: "Prod_12",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "pijama",
      categoria_id: 3,
      preco: 5,
      quantidade: 100,
    },
    {
      nome: "Produto 13",
      produto_id: "Prod_13",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "sutiã",
      categoria_id: 1,
      preco: 5,
      quantidade: 100,
    },
    {
      nome: "Produto 14",
      produto_id: "Prod_14",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "calcinha",
      categoria_id: 2,
      preco: 5,
      quantidade: 100,
    },
    {
      nome: "Produto 15",
      produto_id: "Prod_15",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "pijama",
      categoria_id: 3,
      preco: 5,
      quantidade: 100,
    },
  ];

  //   const [produtos, setProdutos] = useState([
  //     {
  //       nome: "Produto 15",
  //       produto_id: "Prod_15",
  //       foto: SutiaPreto,
  //       descricao:
  //         "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
  //       categoria: "pijama",
  //       categoria_id: 3,
  //       preco: 5,
  //       quantidade: 100,
  //     },
  // ]);





  const [product, setProduct] = useState(ecommerce);
  // const [cart, setCart] = useState(ecommerce);
  // const addTocart = (event) => {
  //   const result = ecommerce.cart.add((product) => {
  //     return cart === event;
  //   });
  //   setProduct(result);
  // };

  // return api.get (
    return (
    <ProductArea>
      <main className="main-product-container">
        <div className="containerImages">
          <img className="img-produto" src={SutiaPreto} alt="/" />

          <img className="img-produto" src={SutiaPreto} alt="/" />

          <img className="img-produto" src={SutiaPreto} alt="/" />

          <img className="img-produto" src={SutiaPreto} alt="/" />
        </div>

        <div className="container-product-info">
          {product.map((values) => {
            const {
              nome,
              produto_id,
              foto,
              descricao,
              categoria,
              categoria_id,
              preco,
              quantidade,
            } = values;

            return (
              <>
                <div className="text-title">
                  <h3> {nome} </h3>
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
                    <p className="product-price">R${preco}</p>
                  </div>
                  <div className="promo-component">
                    <p>or 4 interested-free payment of R$25.00.</p>
                    <a href="/">Learn more</a>
                  </div>
                </div>

                <div>
                  <p className="ProductInfomation">{descricao}</p>
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
                    <button className="buttonCart"
                    // onClick={() => addTocart(1)}
                    >
                      <Link
                        redirect="/cart"
                        texto="Adicionar ao carrinho"
                      ></Link>
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </main>
    </ProductArea>
  );
}
