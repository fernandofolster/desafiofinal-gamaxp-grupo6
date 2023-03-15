import "../../styles/global.js";
import { PainelTabelaPedido } from "./styled";

export default function ListarPedidos() {
  return (
    <PainelTabelaPedido>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Pedido</th>
              <th>ID</th>
              <th>Nome cliente</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </PainelTabelaPedido>
  );
}
