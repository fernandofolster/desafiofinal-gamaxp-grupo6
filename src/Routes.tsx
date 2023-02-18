import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import ProductCategory from "./pages/ProductCategory";
import ProductContent from "./pages/ProductContent";

export default function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/" element={<Home />}/>
        <Route path="/" element={<ProductCategory/>}/>
        <Route path="/" element={<ProductContent />} />
        
      </WrapperRoutes>

    </BrowserRouter>
  );
}

