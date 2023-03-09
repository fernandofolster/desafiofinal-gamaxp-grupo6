import HeaderPainel from "../../components/HeaderPainel";
import "../../styles/global";
import { Link } from "react-router-dom";
import { PainelGeralUsuarios } from "./styled";
import { PageTitle } from "../../components/HeaderPainel";
import TabelaPainelUsuarios from "../../components/TabelaPainelUsuarios";

function PainelAdmUsuarios() {
  return (
    <>
      <div>
        <HeaderPainel />
      </div>
      <div className="container">
        <PainelGeralUsuarios>
          <div className="painel">
            <PageTitle className="title">Painel Administrativo</PageTitle>
            <p>Bem vindo, admin!</p>
          </div>
          <div className="button-area">
            <Link to="/paineladm">
              <button>Produtos</button>
            </Link>

            <Link to="/paineladmuser">
              <button>Usuarios</button>
            </Link>

            <Link to="/paineladmpedido">
              <button>Pedidos</button>
            </Link>
          </div>
          <br />

          <div className="tabela">
            <TabelaPainelUsuarios />
          </div>
        </PainelGeralUsuarios>
      </div>
    </>
  );
}

export default PainelAdmUsuarios;
