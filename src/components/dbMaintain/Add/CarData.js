import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const CarData = ({ insertData }) => {
  const [data, setData] = useState({});
  const [name, setName] = useState();
  const [model, setModel] = useState();
  const [image, setImage] = useState();
  const [price, setPrice] = useState();
  const [year, setYear] = useState();
  const [code, setCode] = useState();
  const [available, setAvailable] = useState();

  const onFormSubmit = (e) => {
    e.preventDefault();
    insertData("car", data);
  };

  return (
    <Form className="mt-5 border p-3" onSubmit={(e) => onFormSubmit(e)}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Car name"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Model</Form.Label>
        <Form.Control
          onChange={(e) => {
            setModel(e.target.value);
          }}
          placeholder="Car model/make"
        />
      </Form.Group>
      <Form.Group>
        <Form.File label="Car image" onChange={(e) => setImage(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          placeholder="Car price per km"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Year</Form.Label>
        <Form.Control
          onChange={(e) => {
            setYear(e.target.value);
          }}
          placeholder="Car year"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Code</Form.Label>
        <Form.Control
          onChange={(e) => {
            setCode(e.target.value);
          }}
          placeholder="Car code"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Available</Form.Label>
        <Form.Control
          onChange={(e) => {
            setAvailable(e.target.value);
          }}
          placeholder="Number of available cars"
        />
      </Form.Group>
      <Button
        onClick={() => {
          alert("Record Inserted. Submit to DB by clicking the 'Submit' Button");
          setData({
            car_name: name,
            car_model: model,
            user_image: image,
            car_price: price,
            car_year: year,
            code: code,
            available: available,
          });
        }}
      >
        Insert into CARS
      </Button>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default CarData;
