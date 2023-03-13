import styled from "styled-components";

export const PainelCategoria = styled.div`
  .painel {
    margin-top: 2rem;
    margin-left: 12.5rem;
  }

  input,
  #button,
  #categoria,
  textarea {
    margin-top: 1rem;
    height: 2.5rem;
    width: 25rem;
  }

  textarea {
    resize: none;
  }

  #descricao {
    width: 25rem;
    height: 9.375rem;
  }

  #button {
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

  #photos {
    margin-top: 1rem;
  }

  .categorias {
    text-align: center;
    align-items: center;
  }
`;
