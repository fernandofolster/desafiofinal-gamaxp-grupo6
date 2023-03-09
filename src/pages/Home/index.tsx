//import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Header from "../../components/Header";
import BannerHome from "../../components/BannerHome";
import Footer from "../../components/Footer";
//import { listProduct } from "../../services/MainApi/produtos";
//import Produtos from "../../components/Produtos";
//import { PageHome } from "./styled";

import "../../styles/global";

function Home() {
  /*interface Produto {
    nome: string;
    preco: number;
    quantidade: number;
    foto: any;
    categoria: any;
    descricao: string;
  }
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await listProduct();
        setProdutos(response.data);
      } catch (error) {
        alert("Deu algo errado");
      }
    })();
  }, [setProdutos]);*/

  return (
    <div className="App">
      <Header />
      <main>
        <div>
          <BannerHome />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
