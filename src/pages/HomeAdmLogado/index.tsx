import BannerHome from "../../components/BannerHome";
import Footer from "../../components/Footer";

import "../../styles/global";
import HeaderLoginAdm from "../../components/HeaderLoginAdm";

function HomeAdmLogin() {
  return (
    <div className="App">
      <HeaderLoginAdm />
      <main>
        <div>
          <BannerHome />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomeAdmLogin;
