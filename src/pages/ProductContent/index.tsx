
import Header from '../../components/Header'

import Footer from '../../components/Footer'

import { MainProduct } from '../../components/MainProduct';

export default function ProductContent (){
    return (
        <div>
            <Header />
            
            <MainProduct nome={''} preco={0} foto={''} categoria={''} descricao={''}/>
            
            <Footer/>
        </div>
    )
}


