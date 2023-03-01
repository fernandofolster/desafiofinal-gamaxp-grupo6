import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@1,6..96,700&family=Gloock&display=swap");
:root {
  --pink-light: #f8bbd0;
  --pink-primary: #e91e63;
  --gray-dark: #212121;
  --gray-secondary: #757575;
  --gray-light: #979797;
  --gray-primary: #c4c4c4;
  --white: #ffffff;
  --black: #000000;
  --salmon: #df9167;
}

* {
  margin: 0;
  padding: 0;
  font-family: "Public Sans", sans-serif;
  box-sizing: border-box;
}

button {
  cursor: pointer;
}

body {
  background-color: #e5e5e5;
  width: 100%;

  @media only screen and (max-device-width: 769px) {
    .category-filter-wrapper { 
        padding-left:9rem;  
    };
    
}

}


  
@media only screen and (max-device-width: 769px) {
    body { width:767px;  
    };
    
}
 
@media only screen and (max-device-width: 769px) {
    header {
    width:100%;
}
    
}

  @media only screen and (max-device-width: 768px) {
        .category-main { 
            width:100%; 
        };
        
    }

  @media only screen and (max-device-width: 768px) {
        .prod-card-wrapper{
            width: 100%;
            display: flex;
            
            
        };
        
    }

    @media only screen and (max-device-width: 768px) {
    .product-container {
        padding-left:0;
    }
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
            width:100%;
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

@media only screen and (max-device-width: 700px) {
        .main-checkout {
            width: 100%;
        }
        
    }

`;
