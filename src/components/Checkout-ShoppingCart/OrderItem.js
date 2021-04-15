import React from "react";
import { Card } from "react-bootstrap";

const OrderItem = ({ flowerName, grocery, date, source, destination, carName, carModel, price }) => {
  return (
    <Card>
      <Card.Header className="bg-dark text-light">Date: {date}</Card.Header>
      <Card.Body>
        <Card.Title>
          {source && `${source} to ${destination}`}
          {flowerName && "Delivery Service"}
          {grocery && "Delivery Service"}
        </Card.Title>
        <Card.Text>
          {(carName && `Car: ${carName} ${carModel}`) || "Car: Tesla Model 3"}
          <br />
          {flowerName && `Flower: ${flowerName}`}
          {grocery &&
            "Item: " +
              grocery.map((item) => {
                return item.name;
              })}
        </Card.Text>
        <Card.Footer>Price: ${price}</Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default OrderItem;
