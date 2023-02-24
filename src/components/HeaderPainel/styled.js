import styled from "styled-components";

export const HeaderPainel = styled.div`
  background-color: #f8bbd0;
  height: 3.75rem;
  box-sizing: border-box;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: #e91e63;
    }

    &.button {
      background-color: #e91e63;
      color: #fff;
      border-radius: 0.125rem;
      padding: 0.5rem 1.5rem;
      margin-right: 2rem;
    }

    &.button:hover {
      background-color: #f8bbd0;
      color: #000;
    }

    &.button-add:hover {
      color: #000;
    }
  }

  .container {
    margin: auto;
    max-width: 90rem;
    display: flex;
  }

  .logo {
    flex: 1;
    display: flex;
    font-family: "Gloock", serif;
    font-size: 28px;
    margin-top: 0.5rem;
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
      margin-left: 1.25rem;
      margin-right: 1.25rem;
    }
  }

  .painel,
  .button-area {
    margin-top: 2rem;
    margin-left: 12.5rem;
  }

  .btnAdd {
    margin-top: 2rem;
    margin-left: 12.5rem;
  }

  .button-add {
    background-color: #f8bbd0;
    color: #000;
    border-radius: 0.125rem;
    padding: 0.5rem 1.5rem;
  }
`;
