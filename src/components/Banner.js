import React from "react";
import { Carousel } from "react-bootstrap";

import teslaS from "../images/teslaS.png";
import tesla3 from "../images/tesla3.jpeg";
import teslaX from "../images/teslaX.jpeg";
import teslaY from "../images/teslaY.jpeg";

const Banner = () => {
  //src from cars table maybe
  return (
    <Carousel className="mb-5">
      <Carousel.Item>
        <img className="d-block w-100" src={teslaX} alt="First slide" />
        <Carousel.Caption>
          <h3>Ride</h3>
          <p>Enjoy a great ride with our Ride Service.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={teslaY} alt="Second slide" />
        <Carousel.Caption>
          <h3>Ride and Delivery</h3>
          <p>Something nice</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={teslaS} alt="Third slide" />
        <Carousel.Caption>
          <h3>Compare our Services</h3>
          <p>Use our system to compare which service you will try today.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={tesla3} alt="Second slide" />
        <Carousel.Caption>
          <h3>Fourth Service</h3>
          <p>Something nice</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
