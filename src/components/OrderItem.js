import React from "react";
import { Card } from "react-bootstrap";

const OrderItem = ({ id, type, items, total }) => {
  return (
    <Card>
      <Card.Header>Order Number {id}</Card.Header>
      <Card.Body>
        <Card.Title>Type: {type}</Card.Title>
        {items && <Card.Text>Items: {items.map((item) => item.toUpperCase() + " ")}</Card.Text>}
        <Card.Footer>Total: ${total}</Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default OrderItem;
