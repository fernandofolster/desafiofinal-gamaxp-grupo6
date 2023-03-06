// import { useState, useContext } from "react";
import HeaderPainel from "../../components/HeaderPainel";
import "../../styles/global.js";
import { PageTitle } from "../../components/HeaderPainel";
import { PainelCadastro } from "./styled";
import { Link } from "react-router-dom";
// import { CartContext } from "../../contexts/auth";

export default function PainelAdmCadastro() {

  // const { cadastrarProduto } = useContext(CartContext);
  // const [nomeProduto, setNomeProduto] = useState("");
  // // const [imgProduto, setImgProduto] = useState("");
  // const [descProduto, setDescProduto] = useState("");
  // const [preco, setPreco] = useState("");
  // const [quantidade, setQuantidade] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Cadastrando produto", { nomeProduto, descProduto, preco, quantidade });
  //   cadastrarProduto(nomeProduto, descProduto, preco, quantidade);
  // };

  return (
    <>
      <div className="painelCadastro">
        <HeaderPainel />
      </div>
      <PainelCadastro>
        <div className="container">
          <div className="painel">
            <Link to="/paineladm">↩ voltar</Link>
            <br />
            <br />
            <PageTitle>Detalhe do Produto</PageTitle>
            <form>
              <input type="text" placeholder="Nome do produto" name="nome" />
              <br />
              <input type="text" placeholder="Preço" name="preco" />
              <br />
              <input type="text" placeholder="Foto" name="foto" />
              <br />
              <select
                required
                id="categoria"
                name="categoria"
                placeholder="Categoria"
              >
                <option value="" disabled selected>
                  Categoria
                </option>
                <option value="sutias">Sutiãs</option>
                <option value="calcinhas">Calcinhas</option>
                <option value="pijamas">Pijamas</option>
              </select>
              <br />
              <input
                type="text"
                id="descricao"
                placeholder="Descrição"
                name="descricao"
              />
              <br />
              <input
                id="btnSalvar"
                type="submit"
                name="salvar"
                value="Salvar"
              />
              <br />
              <input
                id="btnExcluir"
                type="submit"
                name="excluir"
                value="Excluir definitivamente"
              />
            </form>
          </div>
          <div className="foto">foto do produto</div>
        </div>
      </PainelCadastro>
    </>
  );
}

/*class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === "isGoing" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <label>
          Estão indo:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Número de convidados:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}
*/
