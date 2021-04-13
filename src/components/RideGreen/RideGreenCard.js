import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RideGreenCard = () => {
  return (
    <Jumbotron className="resize">
      <h1>Ride Green</h1>
      <p>This service is for you to compare two services of the same type.</p>
      <hr className="my-4" />
      <p>Find out what is better for your experience with us.</p>
      <br />
      <Button variant="primary">
        <Link to="/ride-green" className="text-light">
          Compare your options
        </Link>
      </Button>
    </Jumbotron>
  );
};

export default RideGreenCard;
