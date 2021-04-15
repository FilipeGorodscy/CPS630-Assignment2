import React from "react";
import { Table } from "react-bootstrap";

const FlowersSearched = ({ data }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Store Code</th>
          <th>Image Path</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((flower) => (
            <tr key={flower.id}>
              <td>{flower.id}</td>
              <td>{flower.name}</td>
              <td>{flower.store_code}</td>
              <td>{flower.img_path}</td>
              <td>{flower.price}/km</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default FlowersSearched;
