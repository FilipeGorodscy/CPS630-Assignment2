import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Grocery = () => {
  return (
    <Jumbotron className="resize">
      <h1>Deliver Groceries</h1>
      <p>This service is for you to order groceries.</p>
      <hr className="my-4" />
      <p>You can add groceries to your shopping cart and someone will deliver it to you</p>
      <br />
      <Button variant="primary">
        <Link to="/grocery" className="text-light">
          Grocery
        </Link>
      </Button>
    </Jumbotron>
  );
};

export default Grocery;
