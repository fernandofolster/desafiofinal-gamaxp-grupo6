import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import GlobalStyle from "./styles/global";
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
import MinhaConta from "./pages/ClienteMinhaConta";
import PageCadastro from "./pages/Cadastro";
import PageCadastroAdm from "./pages/CadastroAdm";
import CadastroProduto from "./pages/CadastroProduto";
import { AuthProvider } from "./contexts/auth";

export default function Routes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <WrapperRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/productcategory" element={<ProductCategory />} />
          <Route path="/productcontent" element={<ProductContent />} />
          {/* <Route path="/productcontent/${id}" element={<ProductContent />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/paineladm" element={<PainelAdm />} />
          <Route path="/paineladmcadastro" element={<PainelAdmCadastro />} />
          <Route path="/paineladmdetalhe" element={<PainelAdmDetalhe />} />
          <Route path="/cadastroproduto" element={<CadastroProduto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<PageCadastro />} />
          <Route path="/signupadm" element={<PageCadastroAdm />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/minhaconta" element={<MinhaConta />} />
        </WrapperRoutes>
      </AuthProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}
