import styled from "styled-components";

export const PainelCadastro = styled.div`
  .painel {
    margin-top: 2rem;
    margin-left: 12.5rem;
  }

  .container {
    display: flex;
    justify-content: space-between;
  }

  .foto {
    background-color: gray;
    width: 30%;
    margin-top: 8.5rem;
    text-align: center;
  }

  input,
  #btnSalvar,
  #categoria {
    margin-top: 1rem;
    padding: 0.5rem;
    width: 25rem;
  }

  #descricao {
    height: 9.375rem;
  }

  #btnSalvar {
    background-color: #e91e63;
    color: #fff;
    border: none;
  }

  select:invalid {
    color: gray;
  }

  .voltar {
    text-align: center;
    justify-content: center;
    justify-items: center;
  }

  a {
    text-decoration: none;
    color: inherit;
    list-style: style none;
  }

  #btnExcluir {
    color: #e91e63;
    border-color: #e91e63;
    border-width: 0.1px;
  }
`;
