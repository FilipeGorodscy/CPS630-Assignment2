import React from "react";
import { Table } from "react-bootstrap";

const CarsSearched = ({ data }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Model</th>
          <th>Image Path</th>
          <th>Price</th>
          <th>Year</th>
          <th>Code</th>
          <th>Available</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((car) => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.name}</td>
              <td>{car.model}</td>
              <td>{car.img_path}</td>
              <td>{car.price}/km</td>
              <td>{car.year}</td>
              <td>{car.code}</td>
              <td>{car.available}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default CarsSearched;
