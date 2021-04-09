import React from "react";
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";

import Banner from "./Banner";
import "../styles/Home.css";

const Home = () => {
  return (
    <Container className="mt-5">
      <Banner />
      <Row className="justify-content-between">
        <Col lg={6}>
          <Jumbotron className="resize">
            <h1>Ride</h1>
            <p>This service is for you to book a ride from a source to a destination.</p>
            <hr className="my-4" />
            <p>
              It will find the closest driver available to give you a ride to any location instide the city or up to
              50km far.
            </p>
            <br />
            <Button variant="primary">Plan your trip</Button>
          </Jumbotron>
        </Col>
        <div id="separator" />
        <Col lg={6}>
          <Jumbotron className="resize">
            <h1>Ride & Deliver</h1>
            <p>This service is for you to book a delivery from one of our two associated stores to a destination.</p>
            <hr className="my-4" />
            <p>It will find the closest driver available to deliver an item from the store of your choice.</p>
            <br />
            <Button variant="primary">Deliver an item</Button>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
