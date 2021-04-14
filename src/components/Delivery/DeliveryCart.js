import React, { useState, useEffect } from "react";
import { Container, Col , Row , Card, Button } from "react-bootstrap";

const DeliveryCart = (props) => {

const [totalPrice, setPrice] = useState([]);

useEffect(() => {
    setPrice(0);
  },[]);


     const drop = e =>{
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        const card_price = e.dataTransfer.getData('card_price');
        console.log(card_id);
        console.log(card_price);

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        //e.target.appendChild(card);
        e.target.insertAdjacentHTML('beforeend',('<p>9.99</p>'));
        setPrice(totalPrice + parseFloat(card_price));
        console.log(totalPrice);
    }

    const setTotal = (totalP) =>{
        props.setTotalPrice(totalP);
    }


    const dragOver = e => {
        e.preventDefault();

    }

    
    return (
        
        <div id={props.id} className={props.className} onDrop={drop} onDragOver={dragOver} style={{height: "600px"}}>
            <h6>Total Price:{totalPrice}</h6>
            {props.children}
          <Button onclick={setTotal(totalPrice)}>Checkout</Button>  
        </div>
    );
}

export default DeliveryCart;

//<Button onclick={setTotal}>Checkout</Button>