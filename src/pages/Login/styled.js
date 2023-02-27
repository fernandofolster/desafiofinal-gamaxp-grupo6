import styled from "styled-components";

export const Login = styled.div`
  .container {
    height: 30rem;
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
    align-items: center;
    justify-items: center;
    justify-content: center;
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
`;
