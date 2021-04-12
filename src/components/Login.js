import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Redirect } from "react-router";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get("http://localhost/backend/user/read_one.php", { params: { id: 1 } });
    if (res.data) {
      setLoggedIn(true);
    }
  };

  return (
    <Container className="mt-5 p-5 border">
      <h3>Login</h3>
      <Form onSubmit={(e) => onFormSubmit(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control placeholder="Enter username" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
          {loggedIn && <Redirect to="/" />}
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
