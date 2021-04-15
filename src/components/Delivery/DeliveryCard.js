import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DeliveryCard = () => {
  return (
    <Jumbotron className="resize">
      <h1>Ride & Deliver</h1>
      <p>This service is for you to book a delivery from one of our two associated stores to a destination.</p>
      <hr className="my-4" />
      <p>It will find the closest driver available to deliver an item from the store of your choice.</p>
      <br />
      <Button variant="primary">
        <Link to="/deliver" className="text-light">
          Deliver an Item
        </Link>
      </Button>
    </Jumbotron>
  );
};

export default DeliveryCard;
