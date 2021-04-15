import axios from "axios";
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import OrderItem from "./OrderItem";

const ShoppingCart = ({ hidden }) => {
  const [trips, setTrips] = useState([]);
  const [deliveries, setDeliveries] = useState([]);
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const res = await axios.get("http://localhost/backend/trips/userTrips.php", { params: { user_id: 1 } });
      setTrips(res.data.trips);
    };
    fetchTrips();

    const fetchDeliveries = async () => {
      const res = await axios.get("http://localhost/backend/delivery/userDeliveries.php", { params: { user_id: 1 } });
      setDeliveries(res.data.deliveries);
    };
    fetchDeliveries();

    const fetchGroceries = async () => {
      const res = await axios.get("http://localhost/backend/groceries/userGroceries.php", { params: { user_id: 1 } });
      setGroceries(res.data.groceries);
    };
    fetchGroceries();
    console.log(groceries);
  }, []);
  console.log(groceries);
  return (
    <div>
      <h3>Your Shopping Cart</h3>
      {!trips.length ? (
        <div> You have no orders.</div>
      ) : (
        <div>
          {trips.map((trip) => {
            return (
              <OrderItem
                key={trip.id}
                id={trip.id}
                date={trip.date}
                source={trip.source}
                destination={trip.destination}
                carName={trip.car_name}
                carModel={trip.car_model}
                price={trip.price}
              />
            );
          })}
          {deliveries.map((delivery) => {
            return (
              <OrderItem
                key={delivery.id}
                date={delivery.date_issued}
                flowerName={delivery.flowerName}
                carName={delivery.carName}
                carModel={delivery.carModel}
                price={delivery.total_price}
              />
            );
          })}
          {groceries.map((grocery) => {
            console.log(grocery);
            console.log(grocery.items);
            grocery.items.map((el)=>{
              console.log(el);
              return (
              <OrderItem
                groceryName={el.name}
                price={el.price}
              />
            );
            })
              
            
          })}
          {!hidden && (
            <Link to="/checkout" className="text-light btn btn-secondary w-100 mt-2">
              Proceed to checkout
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
