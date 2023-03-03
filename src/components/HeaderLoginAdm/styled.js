import styled from "styled-components";

export const HeaderArea = styled.div`
  background-color: #f8bbd0;
  height: auto;
  box-sizing: border-box;

  a,
  button {
    text-decoration: none;
    border: 0;
    background: none;
    color: inherit;
    outline: 0;

    &:hover {
      color: #e91e63;
    }
  }

  .container {
    margin: auto;
    max-width: 85rem;
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .logo {
    flex: 1;
    display: flex;
    font-family: "Gloock", serif;
    font-size: 28px;
    align-items: center;
  }

  .logonome {
    font-family: "Gloock", serif;
    font-size: 28px;
  }

  nav {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;

    ul,
    li {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    ul {
      display: flex;
      align-items: center;
      height: 2.5rem;
    }

    li {
      margin-left: 1.2rem;
    }
  }

  #lupa-header {
    max-width: 0.938rem;
    height: 0.938rem;
    margin-right: 0.625rem;
  }

  nav a:hover {
    color: #e91e63;
  }

  .logout {
    flex: 2;
    display: flex;
    justify-content: right;
    align-items: center;
    padding-right: 5rem;

    a:hover {
      color: #e91e63;
    }
    li {
      list-style-type: none;
      margin-right: 1rem;
    }
  }

  #logout {
    margin-left: 1rem;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  #pesquisar {
    border: 0;
    background: none;

    ::placeholder {
      color: #000;
    }
  }
`;
