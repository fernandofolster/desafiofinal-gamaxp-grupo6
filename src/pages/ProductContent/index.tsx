
import Header from '../../components/Header'

import Footer from '../../components/Footer'


import { InfosDoProduto } from '../../components/MainProduct-infos-do-produto';

export default function ProductContent (){
    return (
        <div>
            <Header />
            
            <InfosDoProduto />
            {/* nome={''} preco={0} foto={''} categoria={''} descricao={''} */}
            <Footer/>
        </div>
    )
}


