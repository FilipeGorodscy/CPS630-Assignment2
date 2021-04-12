import React, { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

import ShoppingCart from "./ShoppingCart";

const ShoppingCartPreview = ({ total }) => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const res = await axios.get("http://localhost/backend/trip/userTrips.php", { params: { user_id: 1 } });
      setTrips(res.data.trips);
    };
    fetchTrips();
  }, []);

  const addPrice = (acc, trip) => {
    return acc + parseInt(trip.price);
  };

  return (
    <div>
      <ShoppingCart hidden />
      <br />
      <div className="border p-3 text-center bg-light">
        <b>Your total is:</b> ${trips.reduce(addPrice, 0)}.00
      </div>
      <Link to="/" className="text-light btn btn-secondary w-100 mt-2">
        Complete your purchase
      </Link>
    </div>
  );
};

export default ShoppingCartPreview;
