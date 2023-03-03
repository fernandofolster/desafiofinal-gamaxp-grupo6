import "../../styles/global.js";
import "./styled.js";
import { HeaderArea } from "./styled";
import { Link } from "react-router-dom";
import lupa from "../../assets/images/lupa-header.png";
import "react-modal-login/dist/react-modal-login.css";
import { BsHandbag } from "react-icons/bs";

export default function Header() {
  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/" className="logonome">
            My Valentine Store
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/productcategory">Produtos</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <img src={lupa} alt="lupa-header" id="lupa-header" />
              <label>
                <input id="pesquisar" type="search" placeholder="Pesquisar" />
              </label>
            </li>
          </ul>
        </nav>
        <div className="modal-login">
          <BsHandbag />
          <Link to="/login" id="login">
            Login
          </Link>
        </div>
      </div>
    </HeaderArea>
  );
}
