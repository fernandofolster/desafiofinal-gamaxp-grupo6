import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import ProductContent from "./pages/ProductContent";

export default function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route /*path="/" element={<Home />} *//>
        <Route path="/" element={<ProductContent />} />
      </WrapperRoutes>

    </BrowserRouter>
  );
}

