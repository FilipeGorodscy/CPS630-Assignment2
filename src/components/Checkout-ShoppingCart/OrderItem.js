import React from "react";
import { Card } from "react-bootstrap";

const OrderItem = ({ flowerName, groceryName, date, source, destination, carName, carModel, price }) => {
  return (
    <Card>
      <Card.Header className="bg-dark text-light">Date: {date}</Card.Header>
      <Card.Body>
        <Card.Title>
          {source && `${source} to ${destination}`}
          {flowerName && "Delivery Service"}
          {groceryName && "Delivery Service"}
        </Card.Title>
        <Card.Text>
          Car: {carName} {carModel} <br />
          {flowerName && `Flower: ${flowerName}`}
          {groceryName && `Item: ${groceryName}`}
        </Card.Text>
        <Card.Footer>Price: ${price}</Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default OrderItem;
