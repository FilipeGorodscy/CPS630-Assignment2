import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Banner from "./Banner";
import RideCard from "./RideCard";
import DeliveryCard from "./DeliveryCard";
import "../styles/Home.css";

const Home = () => {
  return (
    <Container className="mt-5">
      <Banner />
      <Row className="justify-content-between">
        <Col lg={6}>
          <RideCard />
        </Col>
        <div id="separator" />
        <Col lg={6}>
          <DeliveryCard />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
