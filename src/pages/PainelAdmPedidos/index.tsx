import HeaderPainel from "../../components/HeaderPainel";
import "../../styles/global.js";
import { Link } from "react-router-dom";
import { PainelGeralPedidos } from "./styled";
import { PageTitle } from "../../components/HeaderPainel";
import TabelaPainelPedidos from "../../components/TabelaPainelPedidos";

function PainelAdmPedidos() {
  return (
    <>
      <div>
        <HeaderPainel />
      </div>
      <div className="container">
        <PainelGeralPedidos>
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
            <TabelaPainelPedidos />
          </div>
        </PainelGeralPedidos>
      </div>
    </>
  );
}

export default PainelAdmPedidos;
