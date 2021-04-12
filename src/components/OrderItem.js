import React from "react";
import { Card } from "react-bootstrap";

const OrderItem = ({ id, date, source, destination, carName, carModel, price }) => {
  return (
    <Card>
      <Card.Header>Date: {date}</Card.Header>
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
