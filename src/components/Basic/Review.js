import React, { useEffect } from "react";
import { Form } from "react-bootstrap";


  return (
    <Form>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Username
        </Form.Label>
        <Col sm={10}>
          <Form.Control placeholder="Username" />
        </Col>
      </Form.Group>
      <Form.Group>
        <Form.Group>
          <Form.Label>Write your revier:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form.Group>
      <fieldset>
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={2}>
            Radios
          </Form.Label>
          <Col sm={10}>
            <Form.Check type="radio" label="Bad" value={1} />
            <Form.Check type="radio" label="Neutral" value={2} />
            <Form.Check type="radio" label="Good" value={3} />
          </Col>
        </Form.Group>
      </fieldset>

      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Submit</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default Review;
