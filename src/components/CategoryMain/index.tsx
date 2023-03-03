
import './styled.js'

import { CardProductArea } from '../Card-produtos/index';
import { CategoryArea } from './styled.js';



function CategoryMain(){
    return (
        <CategoryArea>
        <main className='category-main'>
            <div className="category-description">
                <h3 className='category-title'>Categoria</h3>
                <p className='category-text-descrip'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ducimus ratione sunt deserunt amet doloribus ipsum excepturi eligendi, dolorum cumque, dolore vitae dolor fuga eveniet.</p>
            </div>
            
          
           

            <div className='product-container'>
                
                <CardProductArea/>
                
            </div>
            
            
        </main>
        </CategoryArea>
    )
}

export default CategoryMain
