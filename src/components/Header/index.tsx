import "./styles.css";
import lupa from "../../assets/images/lupa-header.png";

function Header() {
  return (
    <>
      <header>
        <nav>
          <h4>My Valentine Store</h4>
          <ul>
            <li>
              <a href="produtos.tsx">Produtos</a>
            </li>
            <li>
              <a href="sobre.tsx">Sobre</a>
            </li>
            <li>
              <img src={lupa} alt="lupa-header" id="lupa-header" />
              <a href="pesquisa.tsx">Pesquisa</a>
            </li>
            <li>
              <a href="modal.tsx" id="login">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
