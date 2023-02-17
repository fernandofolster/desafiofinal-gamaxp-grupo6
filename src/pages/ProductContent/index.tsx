
import Header from '../../components/Header'
import ProductImageGrid from '../../components/MainProduct/ProductImage'
import ProductDescription from '../../components/MainProduct/ProductInfo'
import Footer from '../../components/Footer'
import  './styles.css';

function ProductContent (){
    return (
        <div>
            <Header />
            <main className='product-grid'>
                <div>
                    <ProductImageGrid/>
                </div>
                <div>
                    <ProductDescription />
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default ProductContent

