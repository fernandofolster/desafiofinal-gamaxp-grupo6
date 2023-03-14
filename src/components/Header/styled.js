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

  .container-log {
    margin: auto;
    max-width: 85rem;
    max-height: 60px;
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .navLog {
    flex: 3;
  }

  .menu-right {
    justify-content: space-between;
    text-decoration: none;
    list-style: none;
    outline: 0;
    display: flex;
    flex-direction: row;
    align-items: center;

    #minhaconta {
      margin-right: 10px;
    }

    #logout {
      margin-left: 10px;
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

  .modal-login {
    flex: 2;
    display: flex;
    justify-content: right;
    align-items: center;
    padding-right: 5rem;

    a:hover {
      color: #e91e63;
    }
  }

  #login {
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

  span {
    margin-right: 1rem;
    font-style: oblique;
  }
`;
