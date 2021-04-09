import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RideCard = () => {
  return (
    <Jumbotron className="resize">
      <h1>Ride</h1>
      <p>This service is for you to book a ride from a source to a destination.</p>
      <hr className="my-4" />
      <p>
        It will find the closest driver available to give you a ride to any location instide the city or up to 50km far.
      </p>
      <br />
      <Button variant="primary">
        <Link to="/ride" className="text-light">
          Plan your trip
        </Link>
      </Button>
    </Jumbotron>
  );
};

export default RideCard;
