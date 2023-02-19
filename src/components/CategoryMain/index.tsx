
import './styles.css'
import CategoryDescription from '../CategoryDescrip'
import CategoryBtn from '../CategoryBtn'
import ProductCard from '../ProductCard'


function CategoryMain(){
    return (
        <main className='category-main'>
            <div>
                <CategoryDescription/>
            </div>

            <div className='category-btn-wrapper'>
                <CategoryBtn/>
                <CategoryBtn/>
                <CategoryBtn/>
                <CategoryBtn/>

            </div>
            
            <div className='prod-card-wrapper'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>

            
            
        </main>
    )
}

export default CategoryMain
