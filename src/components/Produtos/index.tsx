import { Products } from "./styled";
import { Link } from "react-router-dom";

export default function ProdutosHome(props) {
  return (
    <Products className="adProduct">
      <Link to={`/productcategory/${props.id}`}>
        <div className="pImage">
          <img src={props.foto} alt="" />
        </div>
        <div className="pNome">{props.nome}</div>
        <div className="pPreco">{props.preco}</div>
      </Link>
    </Products>
  );
}
