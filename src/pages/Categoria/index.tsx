import { useState } from "react";
import "../../styles/global.js";
import { PageTitle } from "../../components/HeaderPainel";
import { PainelCategoria } from "./styled";
import { createCategory } from "../../services/MainApi/categorias";

export default function AddCategoria() {
  const cadastroCategoria = async (event) => {
    event.preventDefault();

    const payload = {
      nome,
    };

    try {
      const response = await createCategory(payload);
      if (response.status !== 201) {
        return alert("Deu algo errado");
      }
      alert("Categoria cadastrada com sucesso");
    } catch (error) {
      alert("Deu algo errado");
    }
  };

  const [nome, setNome] = useState("");

  return (
    <>
      <div className="painelCadastro"></div>
      <PainelCategoria>
        <div className="painel">
          <PageTitle>Cadastro de categoria</PageTitle>
          <form onSubmit={cadastroCategoria}>
            <label>
              <input
                required
                type="text"
                placeholder="Nome da categoria"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </label>
            <br />
            <input id="button" type="submit" name="salvar" value="Salvar" />
            <input
              id="buttonExc"
              type="submit"
              name="excluir"
              value="Excluir"
              onClick={() => {}}
            />
          </form>
        </div>
      </PainelCategoria>
    </>
  );
}
