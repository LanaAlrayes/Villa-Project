import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Hero() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="./banner-01.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <Row className="justify-content-start">
            <Col className="text-start bg-danger" md="auto">
              {" "}
              <span className="bg-light" >
                Toronto,<span className="text-danger"> Canada</span>
              </span>
              <h2 className=" fs-1 fw-bold text-light text-uppercase">
                Hurry!
                <br /> Get the Best <br /> Villa for <br /> you
              </h2>
            </Col>
          </Row>
        </Carousel.Caption>
        
      </Carousel.Item>
       <Carousel.Item>
        <img
          className="d-block w-100"
          src="./banner-02.jpg"
          alt="Second slide"
        />
       <Carousel.Caption>
          <Row className=" justify-content-start">
            <Col className="text-start bg-danger " md="auto">
              {" "}
              <span className="bg-light" >
                Toronto,<span className="text-danger"> Canada</span>
              </span>
              <h2 className=" fs-1 fw-bold text-light text-uppercase">
                Hurry!
                <br /> Get the Best <br /> Villa for <br /> you
              </h2>
            </Col>
          </Row>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./banner-03.jpg"
          alt="Third slide"
        />
       <Carousel.Caption>
          <Row className=" justify-content-start">
            <Col className="text-start bg-danger " md="auto">
              {" "}
              <span className="bg-light" >
                Toronto,<span className="text-danger"> Canada</span>
              </span>
              <h2 className=" fs-1 fw-bold text-light text-uppercase">
                Hurry!
                <br /> Get the Best <br /> Villa for <br /> you
              </h2>
            </Col>
          </Row>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
