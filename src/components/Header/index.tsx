import "./styles.css";
import lupa from "../../assets/images/lupa-header.png";

function Header() {
  return (
    <>
      <header className="menu-header">
        <nav>
          <h4 className="store-logo">My Valentine Store</h4>
          <ul>
            <li>
              <a href="produtos.tsx">Produtos</a>
            </li>
            <li>
              <a href="sobre.tsx">Sobre</a>
            </li>
            <li>
              <div className="pesquisa-header">
                <img src={lupa} alt="lupa-header" id="lupa-header" />
                <a href="pesquisa.tsx">Pesquisa</a>
              </div>
            </li>
          </ul>
        </nav>
        <div className="modal-login">
              <a href="modal.tsx" id="login">
                Login
              </a>
        </div>
      </header>
    </>
  );
}

export default Header;
