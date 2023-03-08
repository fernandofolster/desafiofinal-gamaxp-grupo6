import { useState, useEffect } from "react";
import "./styled.js";
// import SutiaImg from "../../assets/images/lingerie-preta.jpg";
import { CartArea } from "./styled";
import Link from "../../components/Link";
import SutiaPreto from "../../assets/images/lingerie-preta.jpg";

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



const ecommerce: Ecommerce[] = [
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
];

function CartMain() {
 

  const handleRemoveFromCart = (product_id: string) => {};

  const [product, setProduct] = useState(ecommerce);

  return (
    <CartArea>
      <>
        <div className="cart-main">
          <div className="cart-container">
            <div className="aaa">
              <div>
                <h3 className="page-cart-title">Seu Carrinho</h3>

                <div className="continue-shop">
                  <Link
                    redirect="/productcategory"
                    texto="Continuar comprando"
                  ></Link>
                </div>
              </div>
              {product.map((product) => {
                return (
                  <div className="text-product-cart">
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
                  </div>
                );
              })}
            </div>

            <hr className="hr-cart"></hr>

            <div className="container-order-info">
              <div>
                <h4 className="title-order-info">Informações do pedido</h4>
              </div>

              <hr className="hr"></hr>

              <div className="politica-devolucao">
                <h5>Política de Devolução</h5>
                <p>
                  Este é o nosso exemplo de política de devolução, que é tudo o
                  que você precisa saber sobre nossas devoluções.
                </p>
              </div>

              <hr className="hr"></hr>

              <div>
                <h5 className="opcoes-envio">Opções de envio</h5>
              </div>

              <hr className="hr"></hr>

              <div>
                <h5 className="opcoes-envio">Opções de envio</h5>
              </div>
              <div>
                <hr className="hr"></hr>
              </div>
            </div>
          </div>

          <div className="container-valor-total">
            
            <div>
              <h4 className="title-resume">Resumo do Pedido</h4>
            </div>

            <div>
              <input
                typeof="text"
                className="input-cupom"
                placeholder="Insira o código do cupom aqui"
              ></input>
            </div>

            <div>

            {ecommerce.map((product) => {
              return(
               <>
               <div className="subtotal-cart">
              <h5>Subtotal</h5>
              <p>{product.preco * product.quantidade}</p>
            </div>

            <div className="envio">
              <h5>Envio</h5>
              <p>Calculado na próxima etapa</p>
            </div>

            <hr className="line-total"></hr>

            <div className="total-cart">
              <h5>Total</h5>
              <p>{product.preco * product.quantidade}</p>
            </div>
               </> 
              )
            })}
            </div>
            

            <div>
              <button className="go-checkout-btn">
                <Link redirect="/checkout" texto="Continue to Checkout"></Link>
              </button>
            </div>
          </div>
        </div>
      </>
    </CartArea>
  );
}

export default CartMain;
