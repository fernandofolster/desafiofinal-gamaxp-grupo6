import './style.css'
import rendaSalmao from '../../assets/images/renda-salmao.jpg';
import rendaPreta from '../../assets/images/renda-preta.jpg';

function ProductColorBtn (){
    return (
        <div>
            <button className='btn-product-color' type="button">
                <img className='cover' src={rendaSalmao} alt="#"/>
            </button>

            <button className='btn-product-color' type="button">
                <img className='cover' src={rendaPreta} alt="#"/>
            </button>   
        </div>
    )
}

export default ProductColorBtn
