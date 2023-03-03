import BannerHome from "../../components/BannerHome";
import Footer from "../../components/Footer";
import HeaderLoginCliente from "../../components/HeaderLoginCliente";

import "../../styles/global.css";

function HomeClienteLogin() {
  return (
    <div className="App">
      <HeaderLoginCliente />
      <main>
        <div>
          <BannerHome />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomeClienteLogin;
