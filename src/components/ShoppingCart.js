import React from "react";
import { Link } from "react-router-dom";

import OrderItem from "./OrderItem";

const ShoppingCart = () => {
  //Retrieve orders from DB
  //mock data
  const orders = [
    {
      id: 1,
      type: "Ride",
      items: null,
      total: 200,
    },
    {
      id: 2,
      type: "Delivery",
      items: ["lavender"],
      total: 200,
    },
    {
      id: 3,
      type: "Ride",
      items: null,
      total: 150,
    },
    {
      id: 4,
      type: "Delivery",
      items: ["hot chocolate", "donut", "bagel"],
      total: 200,
    },
  ];
  return (
    <div className="container mt-5">
      <h1>Your Shopping Cart</h1>
      <div>
        {orders.map((order) => {
          return <OrderItem key={order.id} id={order.id} type={order.type} items={order.items} total={order.total} />;
        })}
        <Link to="/checkout" className="text-light btn btn-secondary w-100 mt-2">
          Proceed to checkout
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
