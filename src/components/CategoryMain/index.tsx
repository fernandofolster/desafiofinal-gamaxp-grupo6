
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
                <div className='category-filter'>
                    <div>
                        <button className='category-btn' type="button">
                            <div>Sutiã</div>
                        </button>
                    </div>

                    <div>
                        <button className='category-btn' type="button">
                            <div>Calcinha</div>
                        </button>
                    </div>

                    <div>
                        <button className='category-btn' type="button">
                            <div>Pijama</div>
                        </button>
                    </div>

                </div>
            </div>

           
            
            <div className='prod-card-wrapper'>
                <div className='product-card'>
                    <a className='link-to-description' href="/"> 
                        <img className='product-card-img' src={SutiaPreto} alt='#'/>
                    </a>
                
                    <div className='product-name-size'>
                    <a className='link-to-description' href="/produto/sutia-preto">
                        <p className='product-name'>Nome do Produto</p>
                        <p className='price-prod'>$99</p>
                    </a>
                    </div>
                </div>

                <div className='product-card'>
                    <a className='link-to-description' href="/"> 
                        <img className='product-card-img' src={SutiaPreto} alt='#'/>
                    </a>
                
                    <div className='product-name-size'>
                    <a className='link-to-description' href="/produto/sutia-preto">
                        <p className='product-name'>Nome do Produto</p>
                        <p className='price-prod'>$99</p>
                    </a>
                    </div>
                </div>

                <div className='product-card'>
                    <a className='link-to-description' href="/"> 
                        <img className='product-card-img' src={SutiaPreto} alt='#'/>
                    </a>
                
                    <div className='product-name-size'>
                    <a className='link-to-description' href="/produto/sutia-preto">
                        <p className='product-name'>Nome do Produto</p>
                        <p className='price-prod'>$99</p>
                    </a>
                    </div>
                </div>

                <div className='product-card'>
                    <a className='link-to-description' href="/"> 
                        <img className='product-card-img' src={SutiaPreto} alt='#'/>
                    </a>
                
                    <div className='product-name-size'>
                    <a className='link-to-description' href="/produto/sutia-preto">
                        <p className='product-name'>Nome do Produto</p>
                        <p className='price-prod'>$99</p>
                    </a>
                    </div>
                </div>

                <div className='product-card'>
                    <a className='link-to-description' href="/"> 
                        <img className='product-card-img' src={SutiaPreto} alt='#'/>
                    </a>
                
                    <div className='product-name-size'>
                    <a className='link-to-description' href="/produto/sutia-preto">
                        <p className='product-name'>Nome do Produto</p>
                        <p className='price-prod'>$99</p>
                    </a>
                    </div>
                </div>
            </div>

            <div className='more-prod'>
                <button className='more-product'>Carregar mais</button>
            </div>
            
        </main>
    )
}

export default CategoryMain
