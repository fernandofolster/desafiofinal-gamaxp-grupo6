import styled from "styled-components";

export const CartArea = styled.div`
    body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: auto;
        box-sizing: border-box;
    }
    .cart-main {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;

    }

    .cart-container {
        background-color: #e5e5e5;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: auto;
    }




    .page-cart-title {
        font-size: 2.25rem;
        font-weight: 600;
        color: #000000;
        width: 32.5rem;
        height: auto;
    }

    .continue-shop {
        font-size: 1rem;
        font-weight: 500;
        color: #000000;
        width: 22.5rem;
        height: auto;
        
        text-decoration: none;
    }
    .aaa {
        display: flex;
        flex-direction: column;
        
    }
    .text-product-cart {
        display: flex;
        height: auto;
        margin-top: 1.31rem;
        width: 50%;
        
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

    .hr-cart {
        width: 70%;
        border: 1px solid #909090;
        margin: 1rem 0 1.25rem 0rem;
    }


    .hr {
        width: 33.33vw;
        border: 1px solid #909090;
        margin: 1rem 0 1.25rem 0rem;
    }

    .container-order-info {
        display: flex;
        flex-direction: column;
        width: 100%;

    }


    .title-order-info {
        font-size: 1.37rem;
        font-weight: 600;
        color: #000000;

    }

    .politica-devolucao {
        font-size: 1rem;
        font-weight: 600;
        color: #909090;
        
    }

    .politica-devolucao p{
        width: 33.33vw;
        font-size: 1rem;
        font-weight: 400;
        
    }


    .opcoes-envio {
        font-size: 1rem;
        font-weight: 600;
        color: #909090;
        

    }

    .container-valor-total {
        background-color: dodgerblue;
        width: 32.5rem;
        height: 397px;
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
        flex-wrap: wrap;
        align-content:space-around;
        
    }

    .title-resume {
        font-size: 1.37rem;
        font-weight: 600;
        color: #000000;
        
        
    }

    .input-cupom {
        width: 24.8rem;
        height: 2.5rem;
        font-size: 0.87rem;
        font-weight: 400;
        color: #A9ABBD;
        padding-left: 1rem;
    }

    .subtotal-cart {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.87rem;
        font-weight: 400;
        color: #212121;
    }

    .subtotal-cart h5{
        font-size: 0.87rem;
        font-weight: 400;
    }


    .envio {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.87rem;
        font-weight: 400;
        color: #212121;
    }

    .envio h5 {
        font-size: 0.87rem;
        font-weight: 400;
    }


    .total-cart {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.87rem;
        font-weight: 400;
        color: #212121;
    }

    .total-cart h5{
        font-size: 0.87rem;
        font-weight: 400;
    }

    .line-total {
        margin-left: 0;
        width: 25.12rem;
    }

    .go-checkout-btn {
        background-color: #E91E63;
        border: 1px solid #E91E63;
        font-size: 16px;
        font-weight: 600;
        align-content: center;
        width: 350px;
        height: 50px;
        color: #FFFFFF;
        
    }


    /*-----------Media Query*-----------------*/

    @media only screen and (max-device-width: 768px) {
        body { width:767px; 
        

        };
        
    }

    @media only screen and (max-device-width: 768px) {
        .politica-devolucao p { width:80%; 
            display: flex;
        };
        
    }

    @media only screen and (max-device-width: 768px) {
        .container-order-info {  
            margin-left: 50px;
            display: flex;
        };
    }

    @media only screen and (max-device-width: 768px) {
        .hr {
            width: 80%;
        }

    }

    @media only screen and (max-device-width: 768px) {
        .text-product-cart {
            margin-left: 50px;
            
        }

    }

    @media only screen and (max-device-width: 768px) {
        .cart-main {
            display: flex;
        }
    }

    @media only screen and (max-device-width: 768px) {
        .hr-cart {
            width: 68%;
            margin-left: 50px;
        }
    }


    @media only screen and (max-device-width: 768px) {
        .page-cart-title {
            width: 80%;
            margin-left: 50px;
        }
    }

    @media only screen and (max-device-width: 768px) {
        .continue-shop {
            width: 80%;
            margin-left: 50px;
        }
    }

    @media only screen and (max-device-width: 768px) {
        .cart-container {
            width: 100%;
            
        }
    }

    @media only screen and (max-device-width: 768px) {
        .container-valor-total {
            width: 100%;
        
        }
    }
`;


