import { useState, useContext, useEffect } from "react";
import HeaderPainel from "../../components/HeaderPainel";
import "../../styles/global.js";
import { PageTitle } from "../../components/HeaderPainel";
import { PainelCadastro } from "./styled";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { getCategory } from "../../services/MainApi/categorias";

export default function PainelAdmCadastro() {
  const { cadastrarProduto } = useContext(AuthContext);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [foto, setFoto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Criando produto", { nome, preco, foto, categoria, descricao });
    cadastrarProduto(nome, preco, foto, categoria, descricao);
  };

  interface Categoria {
    nome: string;
  }
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getCategory();
        setCategorias(response.data);
      } catch (error) {
        alert("Deu algo errado");
      }
    };

    getData();
  }, [setCategorias]);

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
          <form onSubmit={handleSubmit}>
            <label>
              <input
                required
                type="text"
                placeholder="Nome do produto"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </label>

            <br />
            <label>
              <input
                required
                type="number"
                placeholder="Preço"
                name="preco"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
              />
            </label>

            <br />
            <label id="photos">
              <span>Selecionar fotos</span>
              <input
                required
                type="file"
                placeholder="Foto"
                name="foto[]"
                multiple
                value={foto}
                onChange={(e) => setFoto(e.target.value)}
              />
            </label>

            <br />
            <label>
              <span>Categorias</span>
              <select
                required
                id="categoria"
                name="categoria"
                placeholder="Categoria"
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option></option>
                {categorias.map((categoria) => (
                  <option>{categoria.nome}</option>
                ))}
              </select>
            </label>
            <br />
            <textarea
              required
              id="descricao"
              placeholder="Descrição"
              name="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
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
