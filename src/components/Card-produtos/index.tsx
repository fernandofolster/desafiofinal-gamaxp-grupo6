import SutiaPreto from "../../assets/images/lingerie-preta.jpg";
import { CardProductStyled } from "./styled";
import { useEffect, useState } from "react";

export function CardProductArea() {
  const products = [
    {
      nome: "Produto 1",
      foto: SutiaPreto,
      descricao: "lorem ipsum",
      categoria: 1,
      preco: 5,
    },
    {
      nome: "Produto 2",
      foto: SutiaPreto,
      descricao: "lorem ipsum",
      categoria: 2,
      preco: 5,
    },
    {
      nome: "Produto 3",
      foto: SutiaPreto,
      descricao: "lorem ipsum",
      categoria: 3,
      preco: 5,
    },
    {
      nome: "Produto 4",
      foto: SutiaPreto,
      descricao: "lorem ipsum",
      categoria: 1,
      preco: 5,
    },
    {
      nome: "Produto 5",
      foto: SutiaPreto,
      descricao: "lorem ipsum",
      categoria: 2,
      preco: 5,
    },

    {
      nome: "Produto 6",
      foto: SutiaPreto,
      descricao: "lorem ipsum",
      categoria: 3,
      preco: 5,
    },
    {
      nome: "Produto 7",
      foto: SutiaPreto,
      descricao: "lorem ipsum",
      categoria: 1,
      preco: 5,
    },
    {
      nome: "Produto 8",
      foto: SutiaPreto,
      descricao: "lorem ipsum",
      categoria: 2,
      preco: 5,
    },
    {
      nome: "Produto 9",
      foto: SutiaPreto,
      descricao: "lorem ipsum",
      categoria: 3,
      preco: 5,
    },
    {
      nome: "Produto 10",
      foto: SutiaPreto,
      descricao: "lorem ipsum",
      categoria: 1,
      preco: 5,
    },

    {
      nome: "Produto 11",
      foto: SutiaPreto,
      descricao: "lorem ipsum",
      categoria: 2,
      preco: 5,
    },
    {
      nome: "Produto 12",
      foto: SutiaPreto,
      descricao: "lorem ipsum",
      categoria: 3,
      preco: 5,
    },
    {
      nome: "Produto 13",
      foto: SutiaPreto,
      descricao: "lorem ipsum",
      categoria: 1,
      preco: 5,
    },
    {
      nome: "Produto 14",
      foto: SutiaPreto,
      descricao: "lorem ipsum",
      categoria: 2,
      preco: 5,
    },
    {
      nome: "Produto 15",
      foto: SutiaPreto,
      descricao: "lorem ipsum",
      categoria: 3,
      preco: 5,
    },
  ];

  // const [categories, setCategories] = useState([
  //   {
  //     categoria: 1,
  //   },
  //   {
  //     categoria: 2,
  //   },
  //   {
  //     categoria: 3,
  //   },
  // ]);

  const [product, setProduct] = useState(products);
  const [pagination, setPagination] = useState(10);

  const loadMore = () => {
    setPagination(pagination + pagination);
  };

  const filterResult = (event) => {
    const result = products.filter((product) => {
      return product.categoria === event;
    });

    setProduct(result);
  };

// >>>>>>>>>>>  ------  Transformar esses filtros em props

  return (
    < div className="category-container">
      <CardProductStyled>
        <div className="category-filter-wrapper">
          <button
            className="category-filter-btn"
            onClick={() => filterResult(1)}
          >
            {1}
          </button>

          <button
            className="category-filter-btn"
            onClick={() => filterResult(2)}
          >
            {2}
          </button>

          <button
            className="category-filter-btn"
            onClick={() => filterResult(3)}
          >
            {3}
          </button>


          <button
            className="category-filter-btn"
            onClick={() => setProduct(products)}
          >
            All
          </button>
        </div>

        <section className="prod-card-wrapper">
          {product.slice(0, pagination).map((values) => {
            const { nome, foto, preco } = values;
            return (
              <>
                <div className="product-card" key={nome}>
                  {/* trocar nome por ID -- pedir p/ back acrescentar ID em product */}
                  <a className="link-to-description" href="/ProductContent">
                    <img className="product-card-img" src={foto} alt="#" />
                  </a>
                  <div className="product-name-size">
                    <a className="link-to-description" href="/ProductContent">
                      <h4 className="product-name">{nome}</h4>
                      <h5 className="price-prod">R$ {preco}</h5>
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
