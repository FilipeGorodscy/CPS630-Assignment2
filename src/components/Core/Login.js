import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Redirect } from "react-router";

const Login = ({ setUsername }) => {
  const [loggedIn, setLoggedIn] = useState();
  const [usernameGiven, setUsernameGiven] = useState();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get("http://localhost/backend/user/read_one.php", { params: { username: usernameGiven } });
    if (res.data) {
      setLoggedIn(true);
      const user = res.data.username;
      sessionStorage.setItem("username", user);
      setUsername(user);
    }
  };

  return (
    <Container className="mt-5 p-5 border">
      <h3>Login</h3>
      <Form onSubmit={(e) => onFormSubmit(e)}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control onChange={(e) => setUsernameGiven(e.target.value)} placeholder="Enter username" />
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
