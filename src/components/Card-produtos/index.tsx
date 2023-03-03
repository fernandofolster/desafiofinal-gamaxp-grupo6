import SutiaPreto from "../../assets/images/lingerie-preta.jpg";
import { CardProductStyled } from "./styled";
import { useState } from "react";

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

  const [product, setProduct] = useState(10);
  const slice = products.slice(0, product);
  const loadMore = () => {
    setProduct(product + product);
  };

  return (
    <CardProductStyled>
      <main className="prod-card-wrapper">
        {slice.map((product) => {
          return (
            <div className="product-card" key={product.categoria}>
              <a className="link-to-description" href="/ProductContent">
                <img className="product-card-img" src={product.foto} alt="#" />
              </a>

              <div className="product-name-size">
                <a className="link-to-description" href="/ProductContent">
                  <h4 className="product-name">{product.nome}</h4>
                  <h5 className="price-prod">R$ {product.preco}</h5>
                </a>
              </div>
            </div>
          );
        })}

        <section className="more-prod">
          <button className="more-product" onClick={() => loadMore()}>
            Mostrar mais
          </button>
        </section>
      </main>
    </CardProductStyled>
  );
}
