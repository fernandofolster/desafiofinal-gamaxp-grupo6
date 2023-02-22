
import "./styles.css";
import lupa from "../../assets/images/lupa-header.png";

function Header() {
  return (
    <>
      <header>
        <nav className="nav-header">
            <h4 className="h4-header">My Valentine Store</h4>
            <ul className="ul-header">
              <li>
                <a className="a-header" href="produtos.tsx">Produtos</a>
              </li>
              <li>
                <a className="a-header" href="sobre.tsx">Sobre</a>
              </li>
              <li>
                <img src={lupa} alt="lupa-header" id="lupa-header" />
                <a className="a-header" href="pesquisa.tsx">Pesquisa</a>
              </li>
            </ul>
        </nav>
        <nav className="nav-login">
          <a className="a-login" href="modal.tsx" id="login">Login</a>
        </nav>
      </header>
    </>
  );
}

export default Header;
