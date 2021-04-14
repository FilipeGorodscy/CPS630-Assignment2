import axios from "axios";
import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";

const Delete = () => {
  const [selected, setSelected] = useState("");
  const [data, setData] = useState();

  const insertData = (tableName, data) => {
    axios.post(`http://localhost/backend/${tableName}/delete.php`, data);
  };

  return (
    <Container className="mt-5">
      <h3>Select which table you want to delete data:</h3>
      <Form.Group>
        <Form.Control as="select" onChange={(e) => setSelected(e.target.value)}>
          <option defaultValue>Choose...</option>
          <option value="cars">CARS</option>
          <option value="flowers">FLOWERS</option>
          <option value="trips">TRIPS</option>
          <option value="orders">ORDERS</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>{selected}</Form.Label>
        <Form.Control placeholder="ID" onChange={(e) => setData(e.target.value)} />
      </Form.Group>

      <Button onClick={() => insertData(selected, data)}>Delete Record</Button>
    </Container>
  );
};

export default Delete;
