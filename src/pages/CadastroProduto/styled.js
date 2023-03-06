import styled from "styled-components";

export const CadastroProduto = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    height: 65vh;
  }

  .area--input {
    margin-top: 1rem;
    padding: 0.5rem;
    width: 20rem;
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem;
    width: 20rem;
    background-color: #e91e63;
    border: none;
    color: #fff;
  }

  form {
    background-color: #fff;
    border-radius: 30px;
    padding: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit;
    align-items: center;
    justify-content: center;
    justify-items: center;
  }
`;
