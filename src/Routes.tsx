import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import ProductCategory from "./pages/ProductCategory";
import ProductContent from "./pages/ProductContent";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";


export default function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/" element={<Home />}/>
        <Route path="/" element={<ProductCategory/>}/>
        <Route path="/" element={<ProductContent />} />
        <Route path="/" element={<Cart />} />
        <Route path="/" element={<Checkout />} />
        
      </WrapperRoutes>

    </BrowserRouter>
  );
}

