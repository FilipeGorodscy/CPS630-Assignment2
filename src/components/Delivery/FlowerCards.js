import React from "react";
import { Card } from "react-bootstrap";

const FlowerCards = (props) => {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", props.id);
    e.dataTransfer.setData("card_name", props.name);
    e.dataTransfer.setData("card_price", props.price);
    e.dataTransfer.setData("card_img", props.img);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <Card
      id={props.id}
      className={props.className}
      draggable="true"
      onDragStart={dragStart}
      onDragOver={dragOver}
      style={{ width: "18rem" }}
    >
      <Card.Img variant="top" height="200px" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FlowerCards;
