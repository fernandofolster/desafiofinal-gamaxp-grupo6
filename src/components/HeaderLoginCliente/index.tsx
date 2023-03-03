import { AuthContext } from "../../contexts/auth";
import "../../styles/global.css";
import "./styled.js";
import { useContext } from "react";
import { HeaderArea } from "./styled";
import { Link } from "react-router-dom";
import lupa from "../../assets/images/lupa-header.png";
import "react-modal-login/dist/react-modal-login.css";
import { BsHandbag } from "react-icons/bs";

export default function HeaderLoginCliente() {
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

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
        <div className="menu-right">
          <li>
            <Link id="minhaconta" to="/minhaconta">
              Minha Conta
            </Link>
          </li>
          <BsHandbag />
          <li>
            <button id="logout" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </div>
      </div>
    </HeaderArea>
  );
}
