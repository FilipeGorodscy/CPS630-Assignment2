import React, { useState } from "react";
import Map from "./Map";
import axios from "axios";

import RideForm from "./RideForm";

const Ride = ({ total, setTotal }) => {
  const [source, setSource] = useState();
  const [destination, setDestination] = useState();
  const [distance, setDistance] = useState();

  //mock data
  /* const cars = [
    { id: 1, model: "Model S", make: "Tesla", year: "2021", price: "10" },
    { id: 2, model: "Model 3", make: "Tesla", year: "2020", price: "10" },
    { id: 3, model: "Model X", make: "Tesla", year: "2020", price: "10" },
    { id: 4, model: "Model Y", make: "Tesla", year: "2021", price: "10" },
  ]; */
  useEffect(() => {
    axios.get;
    return () => {
      cleanup;
    };
  }, [input]);

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
