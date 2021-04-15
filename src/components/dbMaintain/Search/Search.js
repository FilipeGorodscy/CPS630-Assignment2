import axios from "axios";
import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";

import RenderSearched from "./RenderSearched";

const Delete = () => {
  const [selected, setSelected] = useState("");
  const [data, setData] = useState([]);

  const search = async (tableName) => {
    const res = await axios.get(`http://localhost/backend/${tableName}/read.php`);
    setData(res.data.records);
  };

  return (
    <Container className="mt-5">
      <h3>Select which table you want to search data:</h3>
      <Form.Group>
        <Form.Control as="select" onChange={(e) => setSelected(e.target.value)}>
          <option defaultValue>Choose...</option>
          <option value="cars">CARS</option>
          <option value="flowers">FLOWERS</option>
          <option value="trips">TRIPS</option>
        </Form.Control>
      </Form.Group>
      <RenderSearched selected={selected} data={data} />

      <Button onClick={() => search(selected)}>Search</Button>
    </Container>
  );
};

export default Delete;
