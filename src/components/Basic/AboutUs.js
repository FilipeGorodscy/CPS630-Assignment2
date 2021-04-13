import React, { useState } from "react";
import { Container, Jumbotron, Row } from "react-bootstrap";
import DeliveryCard from "../Delivery/DeliveryCard";
import RideCard from "../Ride/RideCard";

const AboutUs = () => {
  const [services, setServices] = useState(false);
  return (
    <Container className="mt-5">
      <Row className="justify-center">
        <Jumbotron className="w-100">
          <h1 className="display-4">About Us</h1>
          <p className="lead">Welcome to P.2.S!</p>
          <hr className="my-4" />
          <p>
            P2S is an online system that aims to plan for smart green trips inside the city and its neighborhood through
            sharing vehicles. P2S attempts to provide a smart green solution on this regard by matching up drivers who
            live, work, and finally drive in the same neighborhood and would like to provide trip services.
          </p>
          <br />
          <p className="lead">
            <button onClick={() => setServices(!services)} className="btn btn-primary btn-lg align-middle">
              Toggle services
            </button>
          </p>
        </Jumbotron>
      </Row>
      {services && (
        <>
          <RideCard />
          <DeliveryCard />
        </>
      )}
    </Container>
  );
};

export default AboutUs;
