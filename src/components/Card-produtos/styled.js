import styled from "styled-components";


export const CardProductArea = styled.div `
    
    .prod-card-wrapper {
        width: 100%;
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 4.125rem;
        gap:21px;
        
    }
    
    
    .product-card {
        width: 16.5rem;
        height:auto;
        background-color: #E5E5E5;
        
    
    }

    .product-card-img{
        width: 16.5rem;
        height: 16.5rem;
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


`;
