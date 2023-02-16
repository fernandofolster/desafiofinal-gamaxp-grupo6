import Header from "../../components/Header";
import BannerHome from "../../components/BannerHome";
import Footer from "../../components/Footer";

import "../../styles/global.css";

function Home() {
  return (
    <div className="App">
      <Header />
      <main>
        <div>
          <BannerHome />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
