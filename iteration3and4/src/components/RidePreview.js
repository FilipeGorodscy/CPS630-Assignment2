import React, { useEffect } from "react";
import { Table } from "react-bootstrap";

const RidePreview = ({ setTotal, car, source, destination }) => {
  //const carArr = car.split(" ");

  useEffect(() => {
    setTotal(car.price * 20);
  }, [car, setTotal]);

  const calcPrice = () => {
    return `$${car.price * 20}`;
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
          <td>{`${car.make} ${car.model} - ${car.year}`}</td>
          <td>{source}</td>
          <td>{destination}</td>
          <td id="price-km">{`$${car.price}`}/km</td>
          <td id="price">{calcPrice()}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default RidePreview;
