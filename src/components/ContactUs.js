import React from "react";
import { Container, Form, Button, Col } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container className="border mt-5 p-5">
      <h1 className="mb-5">Contact Gogo Cars</h1>
      <Form>
        <Form.Row>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control placeholder="Username" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Group>
            <Form.Label>Exaplain your situation in the box below:</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form.Group>

        <Form.Group>
          <Button variant="primary" type="submit" className="mt-2">
            Send
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default ContactUs;
