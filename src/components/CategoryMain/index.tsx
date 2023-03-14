import "./styled.js";

// import { CardProductArea } from '../Card-produtos/index';
import { CategoryArea } from "./styled.js";
import SutiaPreto from "../../assets/images/lingerie-preta.jpg";
import { CardProdutoStyled } from "../Card-produtos/styled";
import { useEffect, useState } from "react";
import { listProducts } from "../../services/api";
import { currencyFormat } from "../../helpers/currencyFormat";

function CategoryMain() {
  interface ecommerce {
    nome: string;
    produto_id: string;
    foto: string;
    descricao: string;
    categoria: string;
    categoria_id: number;
    preco: number;
    quantidade: number;
    _id: string;
  }

  const [category, setCategory] = useState([
    {
      id: "6407e861d3f858822644de58", 
      nome: "Sutiã",
    },
    {
        id: "6407e82bd3f858822644de55", 
        nome: "Calcinha",
    },
    {
        id: "6407e875d3f858822644de5b", 
        nome: "Pijama",
    },
    {
        id: "", 
        nome: "All",
    },
  ]);

  const [pagination, setPagination] = useState(10);
  const loadMore = () => {
    setPagination(pagination + pagination);
  };

  const [product, setProduct] = useState<ecommerce[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await listProducts();
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        alert("Deu algo errado");
      }
    })();
  }, [setProduct]);

  const filterResult = (event) => {
    console.log(event);
    const result = product.filter((product) => {
        console.log(product)
      return product.categoria === event;
    });
    setProduct(result);
  };
  return (
    <CategoryArea>
      <main className="category-main">
        <div className="category-description">
          <h3 className="category-title">Categoria</h3>
          <p className="category-text-descrip">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            ducimus ratione sunt deserunt amet doloribus ipsum excepturi
            eligendi, dolorum cumque, dolore vitae dolor fuga eveniet.
          </p>
        </div>

        <div className="product-container">
          <div className="category-container">
            <CardProdutoStyled>
              <div className="category-filter-wrapper">
                {category.map((category) => {
                  return (
                    <button
                      className="category-filter-btn"
                      onClick={() => filterResult(category.id)}
                    >
                      {category.nome}
                    </button>
                  );
                })}
              </div>

              <section className="prod-card-wrapper">
              
                {product.slice(0, pagination).map((product) => {
                  return (
                    <>
                      <div className="product-card" key={product.produto_id}>
                        {/* <a className="link-to-description" href="/ProductContent"> */}
                        <a
                          className="link-to-description"
                          href={`/productcontent/${product._id}`}
                        >
                          <img
                            className="product-card-img"
                            //src={product.foto}
                            src={SutiaPreto}
                            alt="#"
                          />
                        </a>
                        <div className="product-name-size">
                          {/* <a className="link-to-description" href="/ProductContent"> */}
                          <a
                            className="link-to-description"
                            href={`/productcontent/${product._id}`}
                          >
                            <h4 className="product-name">{product.nome}</h4>
                            <h5 className="price-prod">
                              {currencyFormat(product.preco)}
                            </h5>
                          </a>
                        </div>
                      </div>
                    </>
                  );
                })}

                <div className="more-prod">
                  <button className="more-product" onClick={() => loadMore()}>
                    Mostrar mais
                  </button>
                </div>
              </section>
            </CardProdutoStyled>
          </div>
          {/* <CardProductArea/> */}
        </div>
      </main>
    </CategoryArea>
  );
}

export default CategoryMain;
