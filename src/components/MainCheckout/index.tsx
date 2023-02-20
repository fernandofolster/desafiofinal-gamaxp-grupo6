import './style.css'
import SutiaImg from '../../assets/images/lingerie-preta.jpg'

function MainCheckout () {
    return (
        <div className='main-checkout'>
            <div className='checkout-1'>
                <h3 className='checkout-title'>Checkout</h3>
                <div className='step-checkout'>
                    <p className='adress-step'>Endereço</p>
                    <div>
                        <hr className='hr-divisao'></hr>
                    </div>
                    <p className='shipping-step'><b>Envio</b></p>
                    <div>
                        <hr className='hr-divisao'></hr>
                    </div>
                    <p className='payment-step'>Pagamento</p>
                </div>

                <div className='checkout-envio'>
                    <div className='checkout-opcao-1'>
                        <label className='radio-btn'>
                            <input type='radio' name='envio1' />
                            <span>UPS/USPS Surepost</span>
                            <span>4-7 Business Days</span>
                        </label>
                    </div>
                </div>

                <div>
                    <button className='go-payment-btn'>Continue Payment</button>
                </div>
            </div>

            <div className='checkout-2'>
                <div>
                    <h4>Carrinho</h4>
                </div>

                <div className='product-cart-checkout'>
                    <img className="img-product-checkhout"src={SutiaImg} alt='/'/>
                    <div>
                        <h4 className='product-title-checkout'>Sutiã</h4>
                        
                        <p className='product-size-checkout'>Tamanho: G</p>
                        
                        <p className='product-quantity-checkout'>Quantidade: 1</p>
                        
                        <p className='product-price-checkout'>Preço: $99</p>

                        <button className='product-remove-checkout' type='submit'>
                            <u>Remover</u>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCheckout