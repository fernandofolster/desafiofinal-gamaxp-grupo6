import styled from "styled-components";

export const HeaderPainel = styled.div`
  background-color: #f8bbd0;
  height: 3.75rem;
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
`;
