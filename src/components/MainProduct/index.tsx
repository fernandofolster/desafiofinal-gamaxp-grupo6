
import './styles.css'
import HeartIcon from '../../assets/images/favoritesIcon.png';
import ShareIcon from '../../assets/images/share-Icon.png';
import rendaSalmao from '../../assets/images/renda-salmao.jpg';
import rendaPreta from '../../assets/images/renda-preta.jpg';
import SutiaPreto from '../../assets/images/lingerie-preta.jpg';


function MainProduct (){
    return (

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

                <div className='psb'>
            
                    <button className='btn-choose-size' type='button'>X</button>
            
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
    )
}


export default MainProduct