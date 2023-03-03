import { useContext } from "react";
import "../../styles/global.js";
import { HeaderPainel } from "./styled";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../contexts/auth";

function HeaderPainelAdm() {
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

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
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderPainel>
  );
}

export const PageTitle = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
`;

export const ErrorMessage = styled.div`
  margin: 10px 0;
  background-color: #f8bbd0;
  color: #000;
  border: 2px solid #ff0000;
  padding: 10px;
`;

export default HeaderPainelAdm;
