import HeaderPainel from "../../components/HeaderPainel";
import "../../styles/global.css";
import { Link } from "react-router-dom";
import { PainelGeral } from "./styled";
import { PageTitle } from "../../components/HeaderPainel";
import TabelaPainel from "../../components/TabelaPainel";

function PainelAdm() {
  return (
    <>
      <div>
        <HeaderPainel />
      </div>
      <div className="container">
        <PainelGeral>
          <div className="painel">
            <PageTitle className="title">Painel Administrativo</PageTitle>
            <p>Bem vindo, admin!</p>
          </div>
          <div className="button-area">
            <button>Produtos</button>
            <button>Usuarios</button>
            <button>Pedidos</button>
          </div>
          <div className="btnAdd">
            <Link to="/paineladmcadastro" className="button-add">
              adicionar novo
            </Link>
          </div>
          <div className="tabela">
            <TabelaPainel />
          </div>
        </PainelGeral>
      </div>
    </>
  );
}

export default PainelAdm;
