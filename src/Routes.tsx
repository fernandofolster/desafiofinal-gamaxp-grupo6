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
import PainelAdm from "./pages/PainelAdm";
import PainelAdmCadastro from "./pages/PainelAdmCadastro";
import PainelAdmDetalhe from "./pages/PainelAdmDetalhe";
import Login from "./pages/Login";
import Sobre from "./pages/Sobre";

export default function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/productcategory" element={<ProductCategory />} />
        <Route path="/productcontent" element={<ProductContent />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/paineladm" element={<PainelAdm />} />
        <Route path="/paineladmcadastro" element={<PainelAdmCadastro />} />
        <Route path="/paineladmdetalhe" element={<PainelAdmDetalhe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre" element={<Sobre />} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}
