import React from "react";

const RidePreview = ({ car, source, destination }) => {
  //const carArr = car.split(" ");

  const calcPrice = () => {
    return `$${car.price * 20}`;
  };

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Selected car</th>
          <th scope="col">Source</th>
          <th scope="col">Destination</th>
          <th scope="col">Price per Km</th>
          <th scope="col">Total</th>
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
    </table>
  );
};

export default RidePreview;
