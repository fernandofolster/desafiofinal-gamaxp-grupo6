import "../../styles/global.js";
//import { Link } from "react-router-dom";
import { PainelTabelaPedido } from "./styled";
//import { useEffect, useState } from "react";
//import { getPedidos } from "../../services/MainApi/pedidos";

interface Pedido {
  nome: string;
  email: string;
  _id: any;
}

export default function ListarPedidos() {
  /*  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPedidos();
        setUsuarios(response.data);
      } catch (error) {
        alert("Deu algo errado");
      }
    })();
  }, [setPedidos]);*/

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
