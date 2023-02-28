import HeaderPainel from "../../components/HeaderPainel";
import "../../styles/global.js";
import { PageTitle } from "../../components/HeaderPainel";
import { PainelCadastro } from "./styled";
import { Link } from "react-router-dom";

export default function PainelAdmCadastro() {
  return (
    <>
      <div className="painelCadastro">
        <HeaderPainel />
      </div>
      <PainelCadastro>
        <div className="painel">
          <Link to="/paineladm">↩ voltar</Link>
          <br />
          <br />
          <PageTitle>Cadastro de Produto</PageTitle>
          <form>
            <input
              required
              type="text"
              placeholder="Nome do produto"
              name="nome"
            />
            <br />
            <input required type="number" placeholder="Preço" name="preco" />
            <br />
            <input required type="url" placeholder="Foto" name="foto" />
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
            <textarea
              required
              id="descricao"
              placeholder="Descrição"
              name="descricao"
            ></textarea>
            <br />
            <input id="button" type="submit" name="salvar" value="Salvar" />
          </form>
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
