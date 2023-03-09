import styled from "styled-components";

export const CardProdutosCarrinhoStyled = styled.div`

.text-product-cart {
        display: flex;
        height: auto;
        margin-top: 1.31rem;
        width: 50%;
        background-color: salmon;
    }

    .img-product-cart {
        width: 8.06rem;
        height: 8.31rem;
    
    }

    .product-title-cart {
        margin-left: 0.75rem;
        margin-top: 0.375rem;
        font-size: 1.37rem;
        font-weight: 600;
        color: #000000;

        

    }


    .product-size-cart {
        margin-left: 0.75rem;
        margin-top: 0.43rem;
        font-size: 0.87rem;
        font-weight: 400;
        color: #000000;

    }


    .product-quantity-cart{
        margin-left: 0.75rem;
        margin-top: 0.43rem;
        font-size: 0.87rem;
        font-weight: 400;
        color: #000000;

    }


    .product-price-cart {
        margin-left: 0.75rem;
        margin-top: 0.43rem;
        font-size: 1.37rem;
        font-weight: 600;
        color: #000000;
    
    }

    .product-remove-btn {
        background-color: transparent;
        border: none;
        color:#000000;
        margin-left: 13.125rem;
        font-size: 0.87rem;
        font-weight: 400;
        text-decoration-line: underline;
        display: flex;
        align-items: flex-end;
    }

    @media only screen and (max-device-width: 768px) {
        .text-product-cart {
            margin-left: 50px;
            
        }

    }
`