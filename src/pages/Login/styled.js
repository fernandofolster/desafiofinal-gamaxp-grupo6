import styled from "styled-components";

export const PageLogin = styled.div`
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
    padding: 0.5rem 1rem;
    width: 20rem;
    background-color: #e91e63;
    border: none;
    color: #fff;
    border-radius: 0.25rem;
    max-width: 22rem;
    width: 100%;
    outline: none;
  }

  form {
    border-radius: 30px;
    padding: 1rem;
  }

  .switch {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .switch-wrapper {
    width: 60px;
    height: 34px;
    position: relative;

    input:checked + .switch-button {
      background-color: #f8bbd0;

      :before {
        transform: translateX(26px);
      }
    }
  }

  .switch-button {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 40px;
    background-color: #e91e63;

    :before {
      content: "";
      width: 26px;
      height: 26px;
      position: absolute;
      left: 4px;
      bottom: 4px;
      border-radius: 50%;
      transition: 0.4s all ease;
      background-color: aliceblue;
    }
  }

  .switch-wrapper input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .switch-text {
    padding-right: 0.5rem;
  }

  a {
    text-decoration: none;
    color: inherit;
    align-items: center;
    justify-content: center;
    justify-items: center;
  }
`;
