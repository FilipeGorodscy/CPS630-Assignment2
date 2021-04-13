import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Banner from "./Banner";
import RideCard from "../Ride/RideCard";
import DeliveryCard from "../Delivery/DeliveryCard";
import "../../styles/Home.css";
import RideGreenCard from "../RideGreen/RideGreenCard";
import Service4 from "../Service4";

const Home = () => {
  return (
    <Container className="mt-5">
      <Banner />
      <Row className="justify-content-between">
        <Col lg={6}>
          <RideCard />
          <RideGreenCard />
        </Col>
        <div id="separator" />
        <Col lg={6}>
          <DeliveryCard />
          <Service4 />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
