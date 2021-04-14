import React from "react";
import { Container, Form, Col, InputGroup, FormControl, Row } from "react-bootstrap";

import ShoppingCartPreview from "./ShoppingCartPreview";

const Checkout = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-between">
          <Form className="mt-5 p-5 border">
            <h3>Billing Information</h3>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>

            <Form.Label>Username</Form.Label>
            <InputGroup className="mb-2 mr-sm-2">
              <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="inlineFormInputGroupUsername2" placeholder="Username" />
            </InputGroup>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2 (optional)</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <hr />
            <Form.Check label="Shipping address is the same as my billing address" />
            <Form.Check label="Save this information for next time" />
            <hr />

            <h3 className="my-3">Payment</h3>
            <Form.Check type="radio" label="Credit card" />
            <Form.Check type="radio" label="Debit card" />
            <br />
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Name on card</Form.Label>
                <Form.Control aria-describedby="cardHelp" />
                <Form.Text id="cardHelp" muted>
                  Full name as displayed on card
                </Form.Text>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Card number</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Col xs={3}>
                <Form.Label>Expiration</Form.Label>
                <Form.Control />
              </Col>
              <Col xs={3}>
                <Form.Label>CVV</Form.Label>
                <Form.Control />
              </Col>
            </Form.Row>
          </Form>
          <Col className="mt-5">
            <ShoppingCartPreview />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Checkout;
