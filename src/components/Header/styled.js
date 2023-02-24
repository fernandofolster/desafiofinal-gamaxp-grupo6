import styled from "styled-components";

export const HeaderArea = styled.div`
  background-color: #f8bbd0;
  height: 3.75rem;
  box-sizing: border-box;

  a {
    text-decoration: none;
    color: inherit;
    list-style: style none;
  }

  .container {
    margin: auto;
    max-width: 85rem;
    display: flex;
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
  }

  .modal-login a:hover {
    color: #e91e63;
  }
`;
