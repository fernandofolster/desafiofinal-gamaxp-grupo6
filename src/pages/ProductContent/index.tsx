
import Header from '../../components/Header'
import ProductImageGrid from '../../components/MainProduct/ProductImage'
import ProductDescription from '../../components/MainProduct/ProductContent'
import Footer from '../../components/Footer'

function ProductContent (){
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <ProductImageGrid/>
            </div>
            <div>
                <ProductDescription />
            </div>
            <div>
                <Footer/>
            </div>
            
        </div>
    )
}

export default ProductContent