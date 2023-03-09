import SutiaPreto from "../../assets/images/lingerie-preta.jpg";
import { CardProdutoStyled } from "./styled";
import { useEffect, useState } from "react";
import { data } from "../apiFake/apiFake";

export function CardProductArea() {
  const {ecommerce} = data;
  
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

  const [product, setProduct] = useState(ecommerce);
  const filterResult = (event) => {
    const result = data.filter((product) => {
      return product.categoria_id === event;
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
                  {/* trocar nome por ID -- pedir p/ back acrescentar ID em product */}
                  {/* <a className="link-to-description" href="/ProductContent"> */}
                  <a className="link-to-description" href={`/productcontent/${product.produto_id}`}>
                    <img
                      className="product-card-img"
                      src={product.foto}
                      alt="#"
                    />
                  </a>
                  <div className="product-name-size">
                    {/* <a className="link-to-description" href="/ProductContent"> */}
                    <a className="link-to-description" href={`/productcontent/${product.produto_id}`}>
                      <h4 className="product-name">{product.nome}</h4>
                      <h5 className="price-prod">R$ {product.preco}</h5>
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
