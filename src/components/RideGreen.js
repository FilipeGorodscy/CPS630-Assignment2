import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Delivery from "./Delivery";
import Ride from "./Ride";

const RideGreen = ({ total, setTotal }) => {
  const [ride, setRide] = useState(true);

  return (
    <Container>
      <Row>
        <Col>{ride ? <Ride total={total} setTotal={setTotal} /> : <Delivery />}</Col>
        <Col>{ride ? <Ride total={total} setTotal={setTotal} /> : <Delivery />}</Col>
      </Row>
      <Button onClick={() => setRide(!ride)} variant="secondary" size="lg" block className="mt-5">
        I want to compare two {ride ? "delivery" : "ride"} services instead.
      </Button>
    </Container>
  );
};

export default RideGreen;
