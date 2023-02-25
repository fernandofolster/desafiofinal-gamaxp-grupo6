
import './styles.css'


import SutiaPreto from '../../assets/images/lingerie-preta.jpg'

function CategoryMain(){
    return (
        <main className='category-main'>
            <div className="category-description">
                <h3 className='category-title'>Categoria</h3>
                <p className='category-text-descrip'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ducimus ratione sunt deserunt amet doloribus ipsum excepturi eligendi, dolorum cumque, dolore vitae dolor fuga eveniet.</p>
            </div>

            <div className='category-btn-wrapper'>
                <ul className='ul'>
                    <li>
                        <button className='category-btn' type="button">Sutiã</button>
                    </li>

                    <li>
                        <button className='category-btn' type="button">Calcinha</button>
                    </li>

                    <li>
                        <button className='category-btn' type="button">Pijama</button>
                    </li>

                </ul>
                
            </div>

           
            
            <div className='prod-card-wrapper'>
                <div className='product-card'>
                    <img className='product-card-img' src={SutiaPreto} alt='#'/>
                    <div className='product-name-size'>
                        <p className='product-name'>Nome do Produto</p>
                        <p className='product-size'>M</p>
                    </div>
                    <p className='price-prod'>$99</p>
                </div>

                <div className='product-card'>
                    <img className='product-card-img' src={SutiaPreto} alt='#'/>
                    <div className='product-name-size'>
                        <p className='product-name'>Nome do Produto</p>
                        <p className='product-size'>M</p>
                    </div>
                    <p className='price-prod'>$99</p>
                </div>

                <div className='product-card'>
                    <img className='product-card-img' src={SutiaPreto} alt='#'/>
                    <div className='product-name-size'>
                        <p className='product-name'>Nome do Produto</p>
                        <p className='product-size'>M</p>
                    </div>
                    <p className='price-prod'>$99</p>
                </div>

                <div className='product-card'>
                    <img className='product-card-img' src={SutiaPreto} alt='#'/>
                    <div className='product-name-size'>
                        <p className='product-name'>Nome do Produto</p>
                        <p className='product-size'>M</p>
                    </div>
                    <p className='price-prod'>$99</p>
                </div>

                <div className='product-card'>
                    <img className='product-card-img' src={SutiaPreto} alt='#'/>
                    <div className='product-name-size'>
                        <p className='product-name'>Nome do Produto</p>
                        <p className='product-size'>M</p>
                    </div>
                    <p className='price-prod'>$99</p>
                </div>
            </div>

            <div className='more-prod'>
                <button className='more-product'>Carregar mais</button>
            </div>
            
        </main>
    )
}

export default CategoryMain
