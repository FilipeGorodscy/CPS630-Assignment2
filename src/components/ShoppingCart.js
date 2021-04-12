import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import OrderItem from "./OrderItem";

const ShoppingCart = ({ hidden }) => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const res = await axios.get("http://localhost/backend/trip/userTrips.php", { params: { user_id: 1 } });
      setTrips(res.data.trips);
    };
    fetchTrips();
  }, []);

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
