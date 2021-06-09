import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const GroceryCart = (props) => {
  const [totalPrice, setPrice] = useState([]);
  const [card_Objects, setCard_Objects] = useState([]);

  useEffect(() => {
    setPrice(0);
  }, []);

  const drop = (e) => {
    e.preventDefault();

    const card_id = e.dataTransfer.getData("card_id");
    const card_price = e.dataTransfer.getData("card_price");
    const card_name = e.dataTransfer.getData("card_name");
    const card_img = e.dataTransfer.getData("card_img");

    const card = document.getElementById(card_id);
    card.style.display = "block";
    e.target.insertAdjacentHTML("beforeend", "<p>$4.99</p>");
    setPrice(totalPrice + parseFloat(card_price));

    let card_OBJ = parseInt(card_id);

    setCard_Objects([...card_Objects, card_OBJ]);
  };

  const set_Total_OBJ = (totalP) => {
    props.setTotalPrice(totalP);
    props.objectList(card_Objects, totalPrice);
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

export default GroceryCart;
