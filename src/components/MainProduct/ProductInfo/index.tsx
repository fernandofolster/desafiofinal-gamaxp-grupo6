import  './styles.css';
import ProductSizeButton from '../../buttonSize/index';
import ProductColorBtn from '../../../components/ColorProductBtn/index';
import HeartIcon from '../../FavoriteIcon';
import ShareIcon from '../../ShareIcon';
import PriceComponent from '../../../components/Price';
import PromoComponent from '../../PromoComponent';
import ProductFeatures from '../../ProductFeature';
import PinkBtn from '../../PinkButton';
import QuantityInput from '../../QuantityInput';

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
                <ProductFeatures/>
            </div>

            <div>
                <h3 className='title-product-color'>Color</h3>
            </div>

            <div>
                <ProductColorBtn/> 
            </div>

            <div>
                <h3 className='title-product-size'>Size</h3>
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

            <div>
                <h3 className='quantity-title'> Quantity</h3>
            </div>
            <div className='btn-quantity'>
                <PinkBtn/>
                <QuantityInput/>
            </div>
        </div>
    )
}

export default ProductDescription;

