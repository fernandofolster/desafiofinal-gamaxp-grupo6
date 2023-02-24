import "../../styles/global.css";
import { HeaderPainel } from "./styled";
import { Link } from "react-router-dom";

function HeaderPainelAdm() {
  return (
    <HeaderPainel>
      <div className="container">
        <div className="logo">
          <Link to="/" className="logonome">
            My Valentine Store
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/paineladm">Painel Administrativo</Link>
            </li>
            <li>
              <Link to="/login">Logout</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="painel">
        <h2>Painel Administrativo</h2>
        <p>Bem vindo, admin!</p>
      </div>
      <div className="button-area">
        <Link to="/produtos" className="button">
          Produtos
        </Link>
        <Link to="/usuarios" className="button">
          Usuarios
        </Link>
        <Link to="/pedidos" className="button">
          Pedidos
        </Link>
      </div>
      <div className="btnAdd">
        <Link to="/paineladmcadastro" className="button-add">
          adicionar novo
        </Link>
      </div>
    </HeaderPainel>
  );
}

export default HeaderPainelAdm;
