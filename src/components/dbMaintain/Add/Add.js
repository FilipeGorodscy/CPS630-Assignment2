import axios from "axios";
import React, { useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import RenderSelected from "./RenderSelected";

const Add = () => {
  const [selected, setSelected] = useState("");

  const insertData = (tableName, data) => {
    axios.post(`http://localhost/backend/${tableName}/create.php`, data);
  };

  return (
    <Container className="mt-5">
      <h3>Select which table you want to insert data:</h3>
      <ButtonGroup className="mt-3">
        <Button variant="secondary" onClick={() => setSelected("CARS")}>
          CARS
        </Button>
        <Button variant="secondary" onClick={() => setSelected("FLOWERS")}>
          FLOWERS
        </Button>
        <Button variant="secondary" onClick={() => setSelected("USERS")}>
          USERS
        </Button>
        <Button variant="secondary" onClick={() => setSelected("TRIPS")}>
          TRIPS
        </Button>
        <Button variant="secondary" onClick={() => setSelected("ORDERS")}>
          ORDERS
        </Button>
      </ButtonGroup>
      <RenderSelected selected={selected} insertData={insertData} />
    </Container>
  );
};

export default Add;
