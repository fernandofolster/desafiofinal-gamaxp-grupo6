import React from "react";
import "../../styles/global.css";
import { Link } from "react-router-dom";
import { PainelTabela } from "./styled";

export default function ProductTable(props) {
  return (
    <PainelTabela>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Preço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sutiã</td>
              <td>Sutiã</td>
              <td>R$20,00</td>
              <td>
                <button className="btnD">
                  <Link to="/paineladmdetalhe">ver detalhes</Link>
                </button>
                <button className="btnE">excluir</button>
              </td>
            </tr>
            <tr>
              <td>Sutiã</td>
              <td>Sutiã</td>
              <td>R$20,00</td>
              <td>
                <button className="btnD">
                  <Link to="/paineladmdetalhe">ver detalhes</Link>
                </button>
                <button className="btnE">excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </PainelTabela>
  );
}
