import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import axios from "axios";

import DeliveryCart from "./DeliveryCart";
import FlowerCards from "./FlowerCards";
import Board from "./Board";

const Delivery = ({ setTotal }) => {
  const [flowers, setFlowers] = useState([]);
  const [flowersInCheckout, setFlowersInCheckout] = useState([]);

  useEffect(() => {
    const fetchFlowers = async () => {
      const res = await axios.get("http://localhost/backend/flowers/read.php");
      const flowers = res.data.records;
      setFlowers(flowers);
    };
    fetchFlowers();
  }, []);

  const postObjects = (flower_objects) => {
    console.log(flower_objects);
    for (let key of flower_objects) {
      axios.post("http://localhost/backend/delivery/create.php", key);
    }
  };

  return (
    <Container fluid>
      <h1>Delivery Service</h1>
      <Row>
        <Col sm={10}>
          <Board>
            {flowers.map((flower) => {
              return (
                <FlowerCards
                  id={flower.id}
                  className="card"
                  name={flower.name}
                  price={flower.price}
                  img={flower.img_path}
                ></FlowerCards>
              );
            })}
            ;
          </Board>
        </Col>

        <Col sm={2}>
          <h6>Checkout</h6>
          <DeliveryCart
            id="board-2"
            className="cart"
            setCart={setFlowersInCheckout}
            setTotalPrice={setTotal}
            objectList={postObjects}
          >
            {flowersInCheckout}
          </DeliveryCart>
        </Col>
      </Row>
    </Container>
  );
};

export default Delivery;
