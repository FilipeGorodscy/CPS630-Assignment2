import React, { useState, useEffect } from "react";
import { Container, Col , Row , Card, Button } from "react-bootstrap";

const DeliveryCart = (props) => {

const [totalPrice, setPrice] = useState([]);
const [card_Objects , setCard_Objects ] = useState([]);

useEffect(() => {
    setPrice(0);
  },[]);


     const drop = e =>{
        e.preventDefault();
        
        const card_id = e.dataTransfer.getData('card_id');
        const card_price = e.dataTransfer.getData('card_price');
        const card_name = e.dataTransfer.getData('card_name');
        const card_img = e.dataTransfer.getData('card_img');
        console.log(card_id);
        console.log(card_price);
        console.log(card_name);
        console.log(card_img);

        const card = document.getElementById(card_id);
        card.style.display = 'block';
        //e.target.appendChild(card);
        e.target.insertAdjacentHTML('beforeend',('<p>$9.99</p>'));
        setPrice(totalPrice + parseFloat(card_price));
    
        let card_OBJ = {
            date_issued: "April 14, 2021 18:00",
            date_done: "April 14, 2021 18:01",
            total_price: parseFloat(card_price),
            car_id: 9,
            user_id: 1,
            flower_id: parseInt(card_id)
        }

        setCard_Objects([
            ...card_Objects,
            card_OBJ
        ]);

    }

    

    const set_Total_OBJ = (totalP) =>{
        props.setTotalPrice(totalP);
        props.objectList(card_Objects);

    }


    const dragOver = e => {
        e.preventDefault();

    }

    
    return (
        
        <div id={props.id} className={props.className} onDrop={drop} onDragOver={dragOver} style={{height: "600px"}}>
            <h6>Total Price:{totalPrice}</h6>
            {props.children}
          <Button onClick={()=>set_Total_OBJ(totalPrice)}>Checkout</Button>  
        </div>
    );
}

export default DeliveryCart;

//<Button onclick={setTotal}>Checkout</Button>

/*
"date_issued": "April 11, 2021 14:00",
    "date_done": "April 11, 2021 14:30",
    "total_price": 20.99,
    "car_id": 2,
    "user_id": 1,
    "flower_id": 1
*/