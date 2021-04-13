import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const TripData = ({ insertData }) => {
  const [data, setData] = useState();
  const [source, setSource] = useState();
  const [destination, setDestination] = useState();
  const [distance, setDistance] = useState();
  const [price, setPrice] = useState();
  const [carID, setCarID] = useState();
  const [userID, setUserID] = useState();

  const onFormSubmit = (e) => {
    e.preventDefault();
    insertData("trips", data);
  };

  return (
    <Form className="mt-5 border p-3" onSubmit={(e) => onFormSubmit(e)}>
      <Form.Group>
        <Form.Label>Source</Form.Label>
        <Form.Control
          onChange={(e) => {
            setSource(e.target.value);
          }}
          placeholder="Source"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Destination</Form.Label>
        <Form.Control
          onChange={(e) => {
            setDestination(e.target.value);
          }}
          placeholder="Destination"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Distance</Form.Label>
        <Form.Control
          onChange={(e) => {
            setDistance(e.target.value);
          }}
          placeholder="Distance"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          placeholder="Trip price"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Car ID</Form.Label>
        <Form.Control
          onChange={(e) => {
            setCarID(e.target.value);
          }}
          placeholder="Car ID"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>User ID</Form.Label>
        <Form.Control
          onChange={(e) => {
            setUserID(e.target.value);
          }}
          placeholder="User ID"
        />
      </Form.Group>

      <Button
        onClick={() => {
          alert("Record Inserted. Submit to DB by clicking the 'Submit' Button");
          setData({
            source: source,
            destination: destination,
            distance: distance,
            price: price,
            car_id: carID,
            user_id: userID,
          });
        }}
      >
        Insert into TRIPS
      </Button>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default TripData;
