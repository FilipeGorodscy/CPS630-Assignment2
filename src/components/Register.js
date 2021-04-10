import React from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container className="border mt-5 p-5">
      <h1 className="mb-5">Welcome to Gogo Cars!</h1>
      <Form>
        <Form.Row>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control placeholder="Username" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control placeholder="(000) 000-000" />
        </Form.Group>

        <Form.Group>
          <Link to="/login">Already have an account?</Link>
          <br />
          <Button variant="primary" type="submit" className="mt-2">
            <Link to="/" className="text-light">
              Register now
            </Link>
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Register;
