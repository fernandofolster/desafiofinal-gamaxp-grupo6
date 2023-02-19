import './style.css'
import SutiaPreto from '../../assets/images/lingerie-preta.jpg'

function ProductCard (){
    return (
        <div className='product-card'>
                <img className='product-card-img' src={SutiaPreto} alt='#'/>
                <div className='product-name-size'>
                    <p className='product-name'>Nome do Produto</p>
                    <p className='product-size'>M</p>
                </div>
                <p className='price-prod'>$99</p>
            </div>
    )
}

export default ProductCard