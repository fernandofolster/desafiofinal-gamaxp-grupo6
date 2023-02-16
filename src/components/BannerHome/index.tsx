import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import Banner1 from "../../assets/images/banner1.png";
import Banner2 from "../../assets/images/banner2.png";
import Banner3 from "../../assets/images/banner3.png";
import Banner4 from "../../assets/images/banner4.png";
import "./styles.css";

function bannerRotativo() {
  return (
    <>
      <div className="box">
        <div className="box1">
          <h1>
            <strong>Better cloting for the planet</strong>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe
            excepturi necessitatibus?
          </p>
          <button className="btn-home">Shop All</button>
        </div>
        <div className="box2">
          <Carousel className="banner" variant="dark">
            <Carousel.Item>
              <img className="d-block w-100" src={Banner1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Banner2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Banner3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Banner4} alt="Four slide" />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="box-marcas"></div>
      </div>
    </>
  );
}

export default bannerRotativo;
