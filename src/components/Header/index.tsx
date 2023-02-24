import "../../styles/global.css";
import "./styled.js";
import { HeaderArea } from "./styled";
import { Link } from "react-router-dom";
import lupa from "../../assets/images/lupa-header.png";

function Header() {
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
              <Link to="/produtos">Produtos</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <img src={lupa} alt="lupa-header" id="lupa-header" />
              <label>Pesquisa</label>
            </li>
          </ul>
        </nav>
        <div className="modal-login">
          <Link to="/login" id="login">
            Login
          </Link>
        </div>
      </div>
    </HeaderArea>
  );
}

export default Header;
