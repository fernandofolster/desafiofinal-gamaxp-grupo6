import styled from "styled-components";

export const CategoryArea = styled.div `

body {
    height: auto;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}


.category-main {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
}



.prod-card-wrapper {
    width: 100%;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 4.125rem;
    gap:21px
    
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
    color: #F8BBD0;
    
    line-height: 44px;
    
}

.category-text-descrip {
    font-size: 1.125rem;
    font-weight: 400;
    color: #FFFFFF;
    width: 29rem;
    letter-spacing: 0.02rem;
}

.category-btn-wrapper {
    display: flex;
    flex-direction: row;
    margin-top: 2.5rem;
    
}

.category-filter {
   
    display: flex;
    margin-left: 9rem;
    
}


.category-btn {
    background-color: #E5E5E5;
    border: 0.06rem solid #000000;
    width: 5.9rem;
    height: 1.93rem;
    font-size: 0.81rem;
    font-weight: 400;
    color: #000000;
    margin-right: 0.56rem;
    cursor :pointer;
    
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



.more-product {
    width: 100%;
    background-color: #E5E5E5;
    border: 1px solid #212121;
    font-size: 16px;
    font-weight: 600;
    align-content: center;
    width: 350px;
    height: 50px;
    color: #212121;
    margin-top: 3.625rem;
    margin-bottom: 3.625rem;
}

.more-prod{
    width: 100%;
    display: flex;
    justify-content: center;
}

@media only screen and (max-device-width: 768px) {
    body { 
        width:767px; 
    };
    
}



@media only screen and (max-device-width: 768px) {
    .prod-card-wrapper{
        width: 100%;
        display: flex;
        justify-content: center;
        
    };
    
}
`;