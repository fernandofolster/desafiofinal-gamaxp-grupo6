import SutiaPreto from "../../assets/images/lingerie-preta.jpg";
import { CardProductStyled } from "./styled";
import { useEffect, useState } from "react";

export function CardProductArea() {
  const ecommerce = [
    {
      nome: "Produto 1",
      produto_id: "Prod_1",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "sutiã",
      categoria_id: 1,
      preco: 5,
      quantidade: 100,
    },
    {
      nome: "Produto 2",
      produto_id: "Prod_2",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "sutiã",
      categoria_id: 2,
      preco: 5,
      quantidade: 100,
    },
    {
      nome: "Produto 3",
      produto_id: "Prod_3",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "sutiã",
      categoria_id: 3,
      preco: 5,
      quantidade: 100,
    },
    {
      nome: "Produto 4",
      produto_id: "Prod_4",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "sutiã",
      categoria_id: 1,
      preco: 5,
      quantidade: 100,
    },
    {
      nome: "Produto 5",
      produto_id: "Prod_5",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "sutiã",
      categoria_id: 2,
      preco: 5,
      quantidade: 100,
    },

    {
      nome: "Produto 6",
      produto_id: "Prod_6",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "sutiã",
      categoria_id: 3,
      preco: 5,
      quantidade: 100,
    },
    {
      nome: "Produto 7",
      produto_id: "Prod_7",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "sutiã",
      categoria_id: 1,
      preco: 5,
      quantidade: 100,
    },
    {
      nome: "Produto 8",
      produto_id: "Prod_8",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "sutiã",
      categoria_id: 2,
      preco: 5,
      quantidade: 100,
    },
    {
      nome: "Produto 9",
      produto_id: "Prod_9",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "sutiã",
      categoria_id: 3,
      preco: 5,
      quantidade: 100,
    },
    {
      nome: "Produto 10",
      produto_id: "Prod_10",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "sutiã",
      categoria_id: 1,
      preco: 5,
      quantidade: 100,
    },

    {
      nome: "Produto 11",
      produto_id: "Prod_11",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "sutiã",
      categoria_id: 2,
      preco: 5,
      quantidade: 100,
    },
    {
      nome: "Produto 12",
      produto_id: "Prod_12",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "sutiã",
      categoria_id: 3,
      preco: 5,
      quantidade: 100,
    },
    {
      nome: "Produto 13",
      produto_id: "Prod_13",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "sutiã",
      categoria_id: 1,
      preco: 5,
      quantidade: 100,
    },
    {
      nome: "Produto 14",
      produto_id: "Prod_14",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "sutiã",
      categoria_id: 2,
      preco: 5,
      quantidade: 100,
    },
    {
      nome: "Produto 15",
      produto_id: "Prod_15",
      foto: SutiaPreto,
      descricao:
        "Descrição do produto: Calcinha Hot Pant Tule Chica Capeto com recortes forrados na parte frontal e posterior em tule estampado pink. ",
      categoria: "sutiã",
      categoria_id: 3,
      preco: 5,
      quantidade: 100,
    },
  ];

  const categories = [
    {
      categoria: "sutiã",
    },
    {
      categoria: "calcinha",
    },
    {
      categoria: "pijama",
    },
  ];

  const [category, setCategory] = useState(categories)

  const [pagination, setPagination] = useState(10);
  const loadMore = () => {
    setPagination(pagination + pagination);
  };

  const [product, setProduct] = useState(ecommerce);
  const filterResult = (event) => {
    const result = ecommerce.filter((product) => {
      return product.categoria_id === event;
    });
    setProduct(result);
  };

  return (
    <div className="category-container">
      <CardProductStyled>
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
                  <a className="link-to-description" href="/ProductContent">
                    <img
                      className="product-card-img"
                      src={product.foto}
                      alt="#"
                    />
                  </a>
                  <div className="product-name-size">
                    <a className="link-to-description" href="/ProductContent">
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
      </CardProductStyled>
    </div>
  );
}
