import SutiaPreto from "../../assets/images/lingerie-preta.jpg";
import { CardProdutoStyled } from "./styled";
import { useEffect, useState } from "react";
import { listProducts } from "../../services/api";
import { currencyFormat } from "../../helpers/currencyFormat";

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

export function CardProductArea() {
  const [category, setCategory] = useState([
    {
      categoria: "sutiã",
    },
    {
      categoria: "calcinha",
    },
    {
      categoria: "pijama",
    },
    {
      categoria: "all",
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
        setProduct(response.data);
      } catch (error) {
        alert("Deu algo errado");
      }
    })();
  }, [setProduct]);

  const filterResult = (event) => {
    const result = product.filter((product) => {
      return product.categoria === event;
    });
    setProduct(result);
  };

  return (
    <div className="category-container">
      <CardProdutoStyled>
        <div className="category-filter-wrapper">
          {category.map((category) => {
            return (
              <button
                className="category-filter-btn"
                onClick={() => filterResult(category.categoria)}
              >
                {category.categoria}
              </button>
            );
          })}
        </div>

        <section className="prod-card-wrapper">
          {product.slice(0, pagination).map((product) => {
            return (
              <>
                <div className="product-card" key={product.nome}>
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
  );
}
