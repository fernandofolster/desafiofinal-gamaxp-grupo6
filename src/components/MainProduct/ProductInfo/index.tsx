import  './styles.css';
import ProductSizeButton from '../../buttonSize/index';
import ProductColorBtn from '../../../components/ColorProductBtn/index';
import HeartIcon from '../../FavoriteIcon';
import ShareIcon from '../../ShareIcon';
import PriceComponent from '../../../components/Price';
import PromoComponent from '../../PromoComponent';

function ProductDescription () {
    return (
        <div className='container-product-info'> 
            <div className='text-title'>
                <h2> Sutiã em Renda </h2> 
                <div>
                    <HeartIcon/>
                </div>

                <div>
                    <ShareIcon/>
                </div>
                
            </div>

            <div className='price-and-promo'>
                <div>
                <PriceComponent/>
                </div>
                <div>
                <PromoComponent/>
                
                </div>
                
            </div>
            
            <div>
                <p>Sutiã Triângulo Renda Magic sem bojo e aro. Possui maior cobertura no busto, base alongada e forro em contraste de textura com a renda

                A coleção Magic está de volta ainda mais elegante. As silhuetas na cor preto e o contraste da renda com o forro em microfibra dão um toque elegante e sutil para as lingeries. Ideal para quem procura sofisticação em qualquer ocasião!

                Composição:
                Renda: 90% Poliamida/ 10% Elastano
                Tule: 94% Poliamida / 6% Elastano</p>
            </div>

            <div>
            <h3>Color</h3>
            </div>

            <div>
                <ProductColorBtn/> 
            </div>

            <div>
                <h3>Size</h3>
            </div>

            <div className='psb'>
                <ProductSizeButton/>
                <ProductSizeButton/>
                <ProductSizeButton/>
                <ProductSizeButton/>
                <ProductSizeButton/>
                <ProductSizeButton/>
                <ProductSizeButton/>
            </div>
        </div>
    )
}

export default ProductDescription;

