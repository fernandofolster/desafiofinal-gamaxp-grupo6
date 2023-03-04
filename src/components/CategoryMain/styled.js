import styled from "styled-components";

export const CategoryArea = styled.div`
  .category-main {
    background-color: #e5e5e5;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }

  .link-to-description {
    text-decoration: none;
  }

  .category-description {
    background-color: #212121;
    width: 100%;
    display: flex;
    height: auto;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 9rem;
    flex-direction: column;
  }

  .category-title {
    font-size: 2.25rem;
    font-weight: 600;
    color: #f8bbd0;
    line-height: 44px;
  }

  .category-text-descrip {
    font-size: 1.125rem;
    font-weight: 400;
    color: #ffffff;
    width: 29rem;
    letter-spacing: 0.02rem;
  }

  .product-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-left: 9rem;
  }



  @media only screen and (max-device-width: 768px) {
    .product-container {
      padding-left: 0;
    }
  }
`;
