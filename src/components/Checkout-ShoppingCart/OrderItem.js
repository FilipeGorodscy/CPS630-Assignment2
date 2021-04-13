import React from "react";
import { Card } from "react-bootstrap";

const OrderItem = ({ date, source, destination, carName, carModel, price }) => {
  return (
    <Card>
      <Card.Header className="bg-dark text-light">Date: {date}</Card.Header>
      <Card.Body>
        <Card.Title>
          {source} to {destination}
        </Card.Title>
        <Card.Text>
          Car: {carName} {carModel}
        </Card.Text>
        <Card.Footer>Price: ${price}</Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default OrderItem;
