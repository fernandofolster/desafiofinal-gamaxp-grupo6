import SutiaPreto from "../../assets/images/lingerie-preta.jpg";
import { CardProductArea } from "./styled";

export function CardProduct() {
  const products = [
    {
      nome: "Produto 1",
      foto: SutiaPreto,
      descricao: "lorem ipsum",
      categoria: "id",
      preco: 5,
    },
    {
      nome: "Produto 2",
      foto: SutiaPreto,
      descricao: "lorem ipsum",
      categoria: "id",
      preco: 5,
    },
    {
      nome: "Produto 3",
      foto: SutiaPreto,
      descricao: "lorem ipsum",
      categoria: "id",
      preco: 5,
    },
    {
      nome: "Produto 4",
      foto: SutiaPreto,
      descricao: "lorem ipsum",
      categoria: "id",
      preco: 5,
    },
    {
      nome: "Produto 5",
      foto: SutiaPreto,
      descricao: "lorem ipsum",
      categoria: "id",
      preco: 5,
    },
  ];

  return (
    <CardProductArea>
      <main className="prod-card-wrapper">
        {products.map((product) => (
          <div className="product-card" key={product.categoria}>
            <a className="link-to-description" href="/ProductContent">
              <img className="product-card-img" src={product.foto} alt="#" />
            </a>

            <div className="product-name-size">
              <a className="link-to-description" href="/ProductContent">
                <p className="product-name">{product.nome}</p>
                <p className="price-prod">R$ {product.preco}</p>
              </a>
            </div>
          </div>
        ))}
      </main>
    </CardProductArea>
  );
}
