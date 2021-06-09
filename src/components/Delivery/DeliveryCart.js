import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DeliveryCart = (props) => {
  const [totalPrice, setPrice] = useState([]);
  const [card_Objects, setCard_Objects] = useState([]);

  useEffect(() => {
    setPrice(0);
  }, []);

  const drop = (e) => {
    e.preventDefault();

    const card_id = e.dataTransfer.getData("card_id");
    const card_price = e.dataTransfer.getData("card_price");

    const card = document.getElementById(card_id);
    card.style.display = "block";

    e.target.insertAdjacentHTML("beforeend", "<p>$9.99</p>");
    setPrice(totalPrice + parseFloat(card_price));

    let card_OBJ = {
      date_issued: "April 14, 2021 18:00",
      date_done: "April 14, 2021 18:01",
      total_price: parseFloat(card_price),
      car_id: 1,
      user_id: 1,
      flower_id: parseInt(card_id),
    };

    setCard_Objects([...card_Objects, card_OBJ]);
  };

  const set_Total_OBJ = (totalP) => {
    props.setTotalPrice(totalP);
    props.objectList(card_Objects);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div id={props.id} className={props.className} onDrop={drop} onDragOver={dragOver} style={{ height: "600px" }}>
      <h6>Total Price:{totalPrice}</h6>
      {props.children}

      <Link
        onClick={() => set_Total_OBJ(totalPrice)}
        to="/shopping-cart"
        className="text-light btn btn-secondary w-100 mt-2"
      >
        Proceed to checkout
      </Link>
    </div>
  );
};

export default DeliveryCart;
