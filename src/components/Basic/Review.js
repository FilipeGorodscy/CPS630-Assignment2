import axios from "axios";
import React, { useState } from "react";

import { Form, Row, Col, Button, Container } from "react-bootstrap";

const Review = () => {
  const [data, setData] = useState();
  const [username, setUsername] = useState();
  const [description, setDescription] = useState();
  const [rating, setRating] = useState();

  const onFormSubmit = (e) => {
    setData({ name: username, rating: rating, description: description });
    console.log(data);
    axios.post("http://localhost/backend/reviews/create.php", data);
  };

  return (
    <Container className="border mt-5 p-5">
      <h1 className="mb-5">Review Gogo Cars</h1>
      <Form onSubmit={(e) => onFormSubmit(e)}>
        <Form.Row>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Group>
            <Form.Label>Write your review:</Form.Label>
            <Form.Control onChange={(e) => setDescription(e.target.value)} as="textarea" rows={3} />
          </Form.Group>
        </Form.Group>
        <fieldset
          onChange={(e) => {
            const rat = parseInt(e.target.value);
            setRating(rat);
          }}
        >
          <Form.Group as={Row}>
            <Form.Label as="legend">Rating</Form.Label>
            <Col>
              <Form.Check type="radio" label="Bad" value={1} />
              <Form.Check type="radio" label="Neutral" value={2} />
              <Form.Check type="radio" label="Good" value={3} />
            </Col>
          </Form.Group>
        </fieldset>
        <Button
          onClick={() => {
            alert("Review Added!");
            setData({
              name: username,
              rating: rating,
              description: description,
            });
          }}
        >
          Add
        </Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Review;
