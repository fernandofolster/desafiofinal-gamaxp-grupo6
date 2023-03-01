import styled from "styled-components"

export const CheckoutArea = styled.div`

  
    .main-checkout {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        height: auto;
        width: 100%;
    }

    .checkout-1 {
        background-color:#e5e5e5;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: auto;

    }

    .checkout-title {
        font-size: 2.25rem;
        font-weight: 600;
        color: #000000;
        width: 32.5rem;
        height: auto;
        
    }


    .step-checkout {
        display: flex;
        align-items: center;
        font-size: 1.06rem;
        justify-content: space-around;
        align-content: center;
        color: #000000;
        background-color: #e5e5e5;
    }

    .shipping-step {
        font-weight: 900;
        color: #000000;
    }

    .hr-divisao-step {
        width: 4.25rem;
        margin-left: 0;
        height: 0;
        align-items: center;
        border: 1px solid #212121;
    }





    .envio {
        background-color:#e5e5e5;
        width: 24.75rem;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        border: 2px solid #212121;
        padding: 12px;
    }


    .span-1 {
        margin-left: 17px;
        font-size: 16px;
        font-weight: 700;
    }
    .span-2 {
        margin-left: 17px;
        font-size: 16px;
        font-weight: 400;
        
    }


    .go-payment-btn {
        background-color: #E91E63;
        border: 1px solid #E91E63;
        font-size: 16px;
        font-weight: 600;
        align-content: center;
        width: 350px;
        height: 50px;
        color: #FFFFFF;
        cursor: pointer;
    }



    .checkout-2 {
        background-color: #e5e5e5;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 397px;
        width: 32.5rem;
    }
    .ccc {
        display: flex;
        flex-direction: column;
    }

    .name-cart {
        font-size: 1.25rem;
        font-weight: 400;
        color: #252525;
        width: 32.5rem;
        height: auto;
        margin-left: 9rem; 
    
    }

    .img-product-cart {
        width: 8.06rem;
        height: 8.31rem;
    
    }

    .text-product-cart {
        display: flex;
        height: auto;
        margin-top: 1.31rem;
        width: 50%;
        margin-left: 0;
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

    .hr-cart {
        width: 26.063rem;
        border: 1px solid #909090;
        margin: 1rem 0 1.25rem 0;
    }

    /* max-width  */
    @media only screen and (max-device-width: 700px) {
        .main-checkout {
            width: 100%;
        }
        
    }
`;