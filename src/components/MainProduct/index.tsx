
import './styled.js'
import HeartIcon from '../../assets/images/favoritesIcon.png';
import ShareIcon from '../../assets/images/share-Icon.png';
import rendaSalmao from '../../assets/images/renda-salmao.jpg';
import rendaPreta from '../../assets/images/renda-preta.jpg';
import SutiaPreto from '../../assets/images/lingerie-preta.jpg';
import { ProductArea } from './styled';

function MainProduct (){
    return (
        <ProductArea>
        <main className='main-product-container'>
            
            <div className="containerImages">
                        
                <img className='img-produto' src={SutiaPreto} alt="/" />
                        
                    
                <img className='img-produto' src={SutiaPreto} alt="/" />                        
                        
                    
                <img className='img-produto' src={SutiaPreto} alt="/" />                        

                    
                <img className='img-produto' src={SutiaPreto} alt="/" />                    
            </div>
          

            <div className='container-product-info'> 
                <div className='text-title'>
                    <h2> Sutiã em Renda </h2> 
                    <div>
                        <img src={HeartIcon} alt="favorite-icon" id="share-icon"/>
                    </div>
                    
                    <div>
                        <img src={ShareIcon} alt="share-icon" id="share-icon"/>
                    </div>
                    
                </div>

                <div className='price-and-promo'>
                    <div>
                        <p className="product-price">$99</p>
                    </div>
                    <div className="promo-component">
                        <p>or 4 interested-free payment of $25.00.</p>
                        <a href='/'>Learn more</a>
                    </div>
                    
                </div>
                
                <div>
                    <p className='ProductInfomation'> Sutiã Triângulo Renda Magic sem bojo e aro. Possui maior cobertura no busto, base alongada e forro em contraste de textura com a renda
                    <br></br>
                    <br></br>
                    Composição:
                    <br></br>
                    Renda: 90% Poliamida/ 10% Elastano
                    Tule: 94% Poliamida / 6% Elastano</p>
                </div>

                <div>
                    <h3 className='title-product-color'>Color</h3>
                </div>

                <div>
                    <button className='btn-product-color' type="button">
                        <img className='cover' src={rendaSalmao} alt="#"/>
                    </button>

                    <button className='btn-product-color' type="button">
                        <img className='cover' src={rendaPreta} alt="#"/>
                    </button>   
                </div>

                <div>
                    <h3 className='title-product-size'>Size</h3>
                </div>

                <div className="psb" data-produto="tamanho-attribute">
                    <input type="radio" name="tamanho" value="P" id="tamanho-attribute-1-" className="input"/>
                    <label  className="btn-choose-size" data-text="P" data-attribute-value="P" data-attribute-name="tamanho" data-available="true">
                        <span className="text">P</span>
                    </label>
                    <input type="radio" name="tamanho" value="M" id="tamanho-attribute-2-" className="input"/>
                    <label  className="btn-choose-size" data-text="M" data-attribute-value="M" data-attribute-name="tamanho" data-available="true">
                        <span className="text">M</span>
                    </label>
                    <input type="radio" name="tamanho" value="G" id="tamanho-attribute-3-" className="input"/>
                        <label  className="btn-choose-size" data-text="G" data-attribute-value="G" data-attribute-name="tamanho" data-available="true">
                        <span className="text">G</span>
                    </label>
                </div>

                <div>
                    <h3 className='quantity-title'> Quantity</h3>
                </div>
                <div className='btn-quantity'>
                    <button className='buttonCart'>Add to Cart</button>
                    <input className="quantity-input" type="number" value="1" min="1"></input>
                </div>
                
            </div>
        </main>
        </ProductArea>
    )
}



export default MainProduct