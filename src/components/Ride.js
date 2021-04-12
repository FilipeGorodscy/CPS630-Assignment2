import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

import RideForm from "./RideForm";
import Map from "./Map";

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
    <Container className="mt-5">
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
    </Container>
  );
};

export default Ride;
