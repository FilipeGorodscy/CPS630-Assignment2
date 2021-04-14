import React, { useState, useEffect } from "react";
import { Card , Button } from "react-bootstrap";
//import axios from "axios";

const FlowerCards = (props) =>{
    return (
        <Card draggable="true" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://source.unsplash.com/random/" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
     </Card>
    );
};

export default FlowerCards;