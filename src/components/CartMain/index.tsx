import './styles.css'
import SutiaImg from '../../assets/images/lingerie-preta.jpg'


function CartMain () {
    return (
        <div className='cart-main'>
            <div className='cart-container'>
                <div className='aaa'>
                    <div>
                        <h3 className='page-cart-title'>Seu Carrinho</h3>
                        <a className='continue-shop' href='/'>Continuar comprando.</a>
                    </div>

                    <div className='text-product-cart'>
                        <img className="img-product-cart"src={SutiaImg} alt='/'/>
                        <div>
                            <h4 className='product-title-cart'>Sutiã</h4>
                            
                            <p className='product-size-cart'>Tamanho: G</p>
                            
                            <p className='product-quantity-cart'>Quantidade: 1</p>
                            
                            <p className='product-price-cart'>Preço: $99</p>

                            <button className='product-remove-btn' type='submit'>
                                <u>Remover</u>
                            </button>
                        </div>
                    </div>
                </div>
               
                <hr className='hr-cart'></hr>
                

                <div className='container-order-info'>
                    <div>
                        <h4 className='title-order-info'>Informações do pedido</h4>
                    </div>

                    <hr className='hr'></hr>

                    <div className='politica-devolucao'>
                        <h5>Política de Devolução</h5>
                        <p>Este é o nosso exemplo de política de devolução, que é tudo o que você precisa saber sobre nossas devoluções.</p>
                    </div>

                    <hr className='hr'></hr>

                    <div>
                        <h5 className='opcoes-envio'>Opções de envio</h5>
                    </div>

                    <hr className='hr'></hr>

                    <div>
                        <h5 className='opcoes-envio'>Opções de envio</h5>
                    </div>
                    <div>
                        <hr className='hr' ></hr>
                    </div>
                
                </div>

            </div>
            
            <div className='container-valor-total'>
                <div>
                    <h4 className='title-resume'>Resumo do Pedido</h4>
                </div>
                
                <div>
                    <input typeof='text' 
                        className='input-cupom' 
                        placeholder='Insira o código do cupom aqui'>
                    </input>
                </div>
                

                <div className='subtotal-cart'>
                    <h5>Subtotal</h5>
                    <p>R$ 200,00</p>
                </div>

                <div className='envio'>
                    <h5>Envio</h5>
                    <p>Calculado na próxima etapa</p>
                    
                </div>

                <hr className='line-total'></hr>
                
                <div className='total-cart'>
                    <h5>Total</h5>
                    <p>R$ 200,00</p>
                </div>

                <div>
                    <button className='go-checkout-btn'>Continue to Checkout</button>
                </div>
            </div>

            
            

        </div>
    )

}

export default CartMain;