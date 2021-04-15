import React from "react";
import { Table } from "react-bootstrap";

const TripsSearched = ({ data }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Source</th>
          <th>Distance</th>
          <th>Price</th>
          <th>Username</th>
          <th>Useremail</th>
          <th>Car Name</th>
          <th>Car Model</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((trip) => (
            <tr key={trip.id}>
              <td>{trip.id}</td>
              <td>{trip.date}</td>
              <td>{trip.source}</td>
              <td>{trip.destination}</td>
              <td>{trip.price}/km</td>
              <td>{trip.username}</td>
              <td>{trip.useremail}</td>
              <td>{trip.car_name}</td>
              <td>{trip.car_model}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default TripsSearched;
