import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [redirect, setRedirect] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost/backend/user/create.php", {
      username,
      password,
      email,
      phone,
      address: "some address",
    });
    setRedirect(true);
  };

  return (
    <Container className="border mt-5 p-5">
      <h1 className="mb-5">Welcome to Gogo Cars!</h1>
      <Form onSubmit={(e) => onFormSubmit(e)}>
        <Form.Row>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control onChange={(e) => setPhone(e.target.value)} placeholder="(000) 000-000" />
        </Form.Group>

        <Form.Group>
          <Link to="/login">Already have an account?</Link>
          <br />
          <Button variant="primary" type="submit" className="text-light mt-2">
            Register now
            {redirect && <Redirect to="/login" />}
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Register;
