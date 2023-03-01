import styled from "styled-components";


export const ProductArea = styled.div`
 body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
    box-sizing: border-box;
    background: #e5e5e5;
 }
 
 
 .main-product-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 18.25vh;
    margin-bottom: 41.28vh;
    
 }

 .containerImages {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    gap: 12px;
    width: 50%;
    
 }
   
 .containerImages img {
    width: 17rem;
    
 }

 .container-product-info {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    width: 50%;
    
}

.text-title {
    display: flex;
    flex-direction: row;
    color: #000000;
    align-items: center;
}

.text-title h2 {
    font-size: 2.25rem;
    padding: 0.5rem 0;
}

.btn-icons {
    stroke-width: 1px;
    display: inline-flex;
}

.heart-icon {
    width: 24px;
    height: 24px;
    margin-left: 10px;
    ;
    
}

.btn-curtir {
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
   
    padding-top: 8px;
    padding-bottom: 8px;
}

.share-icon {
    width: 24px;
    height: 24px;
    margin-left: 12px;
}

.btn-share {
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    
    padding-top: 8px;
    padding-bottom: 8px;;
}



.price-and-promo {
    display: flex;
    flex-direction: row;
    width: 32.4rem;
    height: 1.62rem;
    margin-top: 0.37rem;
    
}

.psb {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: transparent;
    
}
.input {
    display: none;
    
}
.title-product-color {
    font-size: 1.125rem;
    margin-top: 1rem;
    font-weight: 400;
    opacity: 0.5;
    color:#000000;
}


.title-product-size {
    font-size: 1.125rem;
    margin-top: 0.44rem;
    font-weight: 400;
    opacity: 0.5;
    color:#000000;
}

.quantity-title{
    font-size: 1.125rem;
    font-weight: 400;
    opacity: 0.5;
    color:#000000;
    margin: 2rem auto 0.5rem 23rem;
    
}
.btn-quantity{
    display: flex;
    
}

.product-price {
    width: 2.85rem;
    height: 1.62rem;
    font-size: 1.12rem;
    font-weight: 400;

}

.promo-component {
    font-size: 0.82rem;
    font-weight: 400;
    color: #212121;
    display: flex;
    padding: 0.18rem 0.62rem 0.18rem 0.75rem;
    border: 1px solid #C4C4C4;
    
}

.promo-component a {
    color: #212121;
    margin-left: 0.2rem;
    
}

.ProductInfomation {
    width: 22.3rem;
    height: 10.8rem;
    font-size: 1.125rem;
    margin-top: 0.3rem;
}


.buttonCart {
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



.btn-product-color {
    color: #212121;
    background: transparent;
    border: 1px solid #212121;
    margin: 0.7rem 0.5rem auto 0;
    font-size: 1rem;
    font-weight: 600;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    overflow: hidden;
   
}

.cover {
    width: 100px;
    height: 100px;
}


.quantity-input {
    width: 6.25rem;
    height: 3.1rem;
    font-size: 1.12rem;
    font-weight: 400;
    margin-left: 1.12rem;
    padding-left: 2.7rem;
    background-color: transparent;
    border: 1px solid #000000;
}


.btn-choose-size {
    color: #212121;
    background: transparent;
    border: 1px solid #212121;
    margin: 0.7rem 0.5rem auto 0;
    padding: 0.85rem 1.25rem;
    font-size: 1rem;
    font-weight: 600;
    align-items: center;
    width: 50px;
    height: 50px;
}


/*--------------------------*/

@media only screen and (max-device-width: 769px) {
    body { width:767px;  
    };
    
}
 

 @media only screen and (max-device-width: 769px) {
    .containerImages { width:767px; 
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            
           
    };
    
}



@media  only screen and (max-device-width: 769px) {
    .container-product-info { width:767px; 
            width: 100%;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 30px;

    };
    
}

@media only screen and (max-device-width: 769px) {
    .main-product-container { 
        margin-top: 50px;
        margin-bottom: 50px;
    };
    
}

`;
