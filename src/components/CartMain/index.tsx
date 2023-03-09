import { useState, useEffect } from "react";
import "./styled.js";
// import SutiaImg from "../../assets/images/lingerie-preta.jpg";
import { CartAreaStyled } from "./styled";
import Link from "../../components/Link";
// import SutiaPreto from "../../assets/images/lingerie-preta.jpg";
import { data } from "../apiFake/apiFake";
import { CardProdutosCarrinho } from "../carrinho_card_produtos/index";

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

export function CartMain() {
  const { ecommerce } = data;

  const [productCart, setProductCart] = useState<ShoppingCartItem[]>([]);;

  return (
    <CartAreaStyled>
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
            </div>
           
            {/* card de cada produto colocado no carrinho */}
            <CardProdutosCarrinho/> 

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
              {/* {productCart.map((product) => {
                return ( */}
                  <>
                    <div className="subtotal-cart">
                      <h5>Subtotal</h5>
                      {/* <p>{product.preco * product.quantidade}</p> */}
                      <p>R$100</p>
                    </div>

                    <div className="envio">
                      <h5>Envio</h5>
                      <p>Calculado na próxima etapa</p>
                    </div>

                    <hr className="line-total"></hr>

                    <div className="total-cart">
                      <h5>Total</h5>
                      {/* <p>{product.preco * product.quantidade}</p> */}
                      <p>R$100</p>
                    </div>
                  </>
                 {/* );
              })}  */}
            </div>

            <div>
              <button className="go-checkout-btn">
                <Link redirect="/checkout" texto="Continue to Checkout"></Link>
              </button>
            </div>
          </div>
        </div>
      </>
    </CartAreaStyled>
  );
}
