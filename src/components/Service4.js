import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service4 = () => {
  return (
    <Jumbotron className="resize">
      <h1>Deliver Grocerie</h1>
      <p>service4service4service4service4service4service4</p>
      <hr className="my-4" />
      <p>service4service4service4service4service4service4service4service4</p>
      <br />
      <Button variant="primary">
        <Link to="/ride" className="text-light">
          service4
        </Link>
      </Button>
    </Jumbotron>
  );
};

export default Service4;
