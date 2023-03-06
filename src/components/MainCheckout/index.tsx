import "./styled.js";
import SutiaImg from "../../assets/images/lingerie-preta.jpg";
import { CheckoutArea } from "./styled.js";
import Link from "../Link/index";

function MainCheckout() {
  return (
    <CheckoutArea>
      <div className="main-checkout">
        <div className="checkout-1">
          <h3 className="checkout-title">Checkout</h3>
          <div className="step-checkout">
            <p className="adress-step">Endereço</p>
            <hr className="hr-divisao-step"></hr>
            <p className="shipping-step">
              <b>Envio</b>
            </p>
            <hr className="hr-divisao-step"></hr>
            <p className="payment-step">Pagamento</p>
          </div>

          <div>
            <label className="envio">
              <input
                className="input-span"
                type="radio"
                id="option"
                name="envio1"
                value="#"
              />
              <div>
                <span className="span-1">PAC</span>
                <br></br>
                <span className="span-2">4-7 Dias Úteis</span>
              </div>
            </label>
          </div>

          <div>
            <button className="go-payment-btn">
              <Link redirect="/" texto="Ir para pagamento"></Link>
            </button>
          </div>
        </div>

        <div className="checkout-2">
          <div>
            <div>
              <h4 className="name-cart">Carrinho</h4>
            </div>

            <div className="text-product-cart">
              <img className="img-product-cart" src={SutiaImg} alt="/" />
              <div>
                <h4 className="product-title-cart">Sutiã</h4>

                <p className="product-size-cart">Tamanho: G</p>

                <p className="product-quantity-cart">Quantidade: 1</p>

                <p className="product-price-cart">Preço: $99</p>

                <button className="product-remove-btn" type="submit">
                  <u>Remover</u>
                </button>
              </div>
            </div>
          </div>

          <hr className="hr-cart"></hr>
        </div>
      </div>
    </CheckoutArea>
  );
}

export default MainCheckout;
