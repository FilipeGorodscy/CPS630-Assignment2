import React, { useState, useEffect } from "react";
import { Container, Col , Row , Card, Button } from "react-bootstrap";
import axios from "axios";

import GroceryCart from './GroceryCart';
import GroceryCards from './GroceryCards';
import Board from './Board';


const GroceryDelivery = ({total, setTotal}) => {

const [groceries, setGroceries] = useState([]);
//const [flowersInCheckout, setFlowersInCheckout] = useState([]);

useEffect(() => {
    const fetchGrocery = async () => {
      const res = await axios.get("http://localhost/backend/grocery_items/read.php");
      const grocery = res.data.records;
      setGroceries(grocery);
    };
    fetchGrocery();
  }, []);

console.log(total);

const postObjects = (grocery_objects , price) => {
  console.log(grocery_objects);
  let grocery_obj = {
    date_issued: "April 15, 2021 18:00",
    date_done: "April 15, 2021 18:01",
    total_price: price,
    user_id: 1,
    items:grocery_objects
  };
console.log(grocery_obj);
  axios.post("http://localhost/backend/delivery/create.php", grocery_obj);

};

  return (
    <Container fluid>
    <h1>Delivery Service</h1>
  <Row>
    <Col sm={10}>
    <Board>
    {groceries.map((grocery) =>{
        return (<GroceryCards id={grocery.id} className='card' name={grocery.name} price={grocery.price} img={grocery.img_path} > </GroceryCards>)
      })};
    </Board>  
    </Col>

    <Col sm={2}>
    <h6>Checkout</h6>
    <GroceryCart id='board-2' className='cart' setTotalPrice={setTotal} objectList={postObjects}></GroceryCart> 
    </Col>
  
  </Row>
    </Container>
    
  );
  
    

  

};

export default GroceryDelivery;


/*const Ride = ({ total, setTotal }) => {
  const [source, setSource] = useState();
  const [destination, setDestination] = useState();
  const [distance, setDistance] = useState();
  const [cars, setCars] = useState([]);
  




  <FlowerCards allFlowers = {flowers}/> 
  <DeliveryCart cartItems = {flowersInCheckout} /> 
  




  */

/* Flower object contains "id": "1",
                "name": "Spring Flower",
                "store_code": "1",
                "img_path": "images/flowers/spring.jpg",
                "price": "12.99"
*/


/* <h1 class="">Plan your Delivery</h1>
  <br>
  <div class='row'>
    <div class='col-10'>
      <?php
      $i = 0;
      while ($i < $stmt->num_rows) {
        $stmt->bind_result($name, $price, $description, $src);
        $stmt->fetch();
        echo '<div class="card shop-item" style="width: 10rem;" draggable="true">
            <img class="card-img-top img-fluid" src="' . $src . '" alt="">
            <div class="card-body">
              <h4 class="card-title-0">' . $name . '</h4>
              <p class="card-text">' . $description . '</p>
              <p class="card-text">
                <small class="text-muted"> $' . $price . '.99</small>
              </p>
            </div>
          </div>';
        $i++;
      }
      ?>
    </div>

    <div class="col-2 shop-cart" style="background-color: #F3F3F3">
      <h6>Shopping cart</h6>
      <h6 class="total-price">Total Price --> $0</h6>
      <button class="btn btn-dark btn-block" type="button" onclick="clearShoppingCart()">Clear</button>
      <a href='../pages/checkout.php'><button class="btn btn-dark btn-block" type="button">Checkout</button></a>
    </div>

  </div>

Take flowers from state

{flowers.map((flower) =>{
        return (<FlowerCards id={flower.id} className='card' name={flower.name} price={flower.price} img={flower.img_path} > </FlowerCards>)
      })};

      or 

      <FlowerCards id='1' className='card' img ='https://source.unsplash.com/random' name='random' price='9.99'></FlowerCards>
    <FlowerCards id='2' className='card' img ='https://source.unsplash.com/random' name='randomm' price='9.99'></FlowerCards>


    date_issued: "April 15, 2021 18:00",
            date_done: "April 15, 2021 18:01",
            total_price: parseFloat(card_price),
            user_id: 1,

*/