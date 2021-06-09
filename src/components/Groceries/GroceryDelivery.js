import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import axios from "axios";

import GroceryCart from "./GroceryCart";
import GroceryCards from "./GroceryCards";
import Board from "./Board";

const GroceryDelivery = ({ total, setTotal }) => {
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    const fetchGrocery = async () => {
      const res = await axios.get("http://localhost/backend/grocery_items/read.php");
      const grocery = res.data.records;
      setGroceries(grocery);
    };
    fetchGrocery();
  }, []);

  const postObjects = (grocery_objects, price) => {
    let grocery_obj = {
      date_issued: "April 15, 2021 18:00",
      date_done: "April 15, 2021 18:01",
      total_price: price,
      user_id: 1,
      items: grocery_objects,
    };
    axios.post("http://localhost/backend/groceries/create.php", grocery_obj);
  };

  return (
    <Container fluid>
      <h1>Delivery Service</h1>
      <Row>
        <Col sm={10}>
          <Board>
            {groceries.map((grocery) => {
              return (
                <GroceryCards
                  id={grocery.id}
                  className="card"
                  name={grocery.name}
                  price={grocery.price}
                  img={grocery.img_path}
                ></GroceryCards>
              );
            })}
            ;
          </Board>
        </Col>

        <Col sm={2}>
          <h6>Checkout</h6>
          <GroceryCart id="board-2" className="cart" setTotalPrice={setTotal} objectList={postObjects}></GroceryCart>
        </Col>
      </Row>
    </Container>
  );
};

export default GroceryDelivery;
