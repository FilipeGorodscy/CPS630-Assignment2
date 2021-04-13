import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FlowerData = ({ insertData }) => {
  const [data, setData] = useState({});
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [price, setPrice] = useState();
  const [storeCode, setStoreCode] = useState();

  const onFormSubmit = (e) => {
    e.preventDefault();
    insertData("flowers", data);
  };

  return (
    <Form className="mt-5 border p-3" onSubmit={(e) => onFormSubmit(e)}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Flower name"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Store Code</Form.Label>
        <Form.Control
          onChange={(e) => {
            setStoreCode(e.target.value);
          }}
          placeholder="Store code"
        />
      </Form.Group>
      <Form.Group>
        <Form.File label="Flower image" onChange={(e) => setImage(e.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          placeholder="Flower price"
        />
      </Form.Group>

      <Button
        onClick={() => {
          alert("Record Inserted. Submit to DB by clicking the 'Submit' Button");
          setData({
            flower_name: name,
            user_image: image,
            flower_price: price,
            store_code: storeCode,
          });
        }}
      >
        Insert into FLOWERS
      </Button>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default FlowerData;
