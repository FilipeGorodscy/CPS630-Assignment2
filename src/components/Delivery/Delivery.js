import React, { useState, useEffect } from "react";
import { Container, Col , Row , Card, Button } from "react-bootstrap";
import axios from "axios";

import DeliveryCart from './DeliveryCart';
import FlowerCards from './FlowerCards';
import Board from './Board';


const Delivery = ({total, setTotal}) => {

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

console.log(total);

const postObjects = (flower_objects) => {
  for (let flower in flower_objects) {
  axios.post("http://localhost/backend/delivery/create.php", flower);
} 
};
  
  return (
    <Container fluid>
    <h1>Delivery Service</h1>
  <Row>
    <Col sm={10}>
    <Board>
    {flowers.map((flower) =>{
        return (<FlowerCards id={flower.id} className='card' name={flower.name} price={flower.price} img={flower.img_path} > </FlowerCards>)
      })};
    </Board>  
    </Col>
    
    <Col sm={2}>
    <h6>Checkout</h6>
    <DeliveryCart id='board-2' className='cart' setCart={setFlowersInCheckout} setTotalPrice={setTotal} objectList={postObjects}> {flowersInCheckout} </DeliveryCart> 

    </Col>
  
  </Row>
    </Container>
    
  );
  
    

  

};

export default Delivery;


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



*/