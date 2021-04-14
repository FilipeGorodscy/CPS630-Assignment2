import React from "react";
import { Table } from "react-bootstrap";

const RidePreview = ({ setTotal, distance, car, source, destination }) => {
  const calcPrice = () => {
    const total = car.price * distance;
    setTotal(total);
    return `$${total}`;
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Selected car</th>
          <th>Source</th>
          <th>Destination</th>
          <th>Price per Km</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{`${car.name} ${car.model} - ${car.year}`}</td>
          <td>{source}</td>
          <td>{destination}</td>
          <td id="price-km">{`$${car.price}`}/km</td>
          <td id="price">{distance && calcPrice()}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default RidePreview;
