import styled from "styled-components";

export const CardProdutoStyled = styled.div`
  .prod-card-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 4.125rem;
    gap: 21px;
  }

  .product-card {
    width: 16.5rem;
    height: auto;
    background-color: #e5e5e5;
    overflow: hidden;
  }

  .product-card-img {
    width: 16.5rem;
    height: 16.5rem;
    transition: all .3s ease-in-out;
  }

  .product-card-img:hover {
    transform: scale(1.1);
  }

  .product-name {
    font-size: 1.06rem;
    font-weight: 700;
    color: #000000;
  }

  .product-name-size {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.8rem;
  }

  .product-size {
    font-size: 1.063rem;
    font-weight: 400;
    color: #000000;
  }

  .price-prod {
    margin-top: 0.3rem;
    font-size: 1.063rem;
    font-weight: 400;
    color: #000000;
  }

  .more-product {
    width: 100%;
    background-color: #e91e63;
    border: 1px solid #e91e63;
    font-size: 16px;
    font-weight: 600;
    align-content: center;
    width: 350px;
    height: 50px;
    color: #FFFFFF;
    margin-top: 3.625rem;
    margin-bottom: 3.625rem;
  }

  .more-prod {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .category-filter-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 2.5rem;
  }

  .category-filter-btn {
    background-color: #e5e5e5;
    border: 0.06rem solid #000000;
    width: 5.9rem;
    height: 1.93rem;
    font-size: 0.81rem;
    font-weight: 400;
    color: #000000;
    margin-right: 0.56rem;
    cursor: pointer;
  }

  @media only screen and (max-device-width: 768px){
    .prod-card-wrapper {
      display: flex;
      justify-content: center;
      
    }
  }
`;
