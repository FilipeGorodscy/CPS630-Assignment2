import React, { useState, useEffect } from "react";
import Map from "./Map";
import axios from "axios";

import RideForm from "./RideForm";

const Ride = ({ total, setTotal }) => {
  const [source, setSource] = useState();
  const [destination, setDestination] = useState();
  const [distance, setDistance] = useState();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const res = await axios.get("http://localhost/backend/car/read.php");
      const cars = res.data.records;
      setCars(cars);
    };
    fetchCars();
  }, []);

  return (
    <div className="container">
      <h1 id="head">Plan your trip</h1>
      <br />
      <RideForm
        cars={cars}
        distance={distance}
        total={total}
        setTotal={setTotal}
        source={source}
        destination={destination}
        setSource={setSource}
        setDestination={setDestination}
      />
      <br />
      <Map setDistance={setDistance} source={source} destination={destination} />
    </div>
  );
};

export default Ride;
