import React, { useState } from "react";
import Map from "./Map";

import RideForm from "./RideForm";

const Ride = () => {
  const [source, setSource] = useState();
  const [destination, setDestination] = useState();

  //mock data
  const cars = [
    { id: 1, model: "Model S", make: "Tesla", year: "2021", price: "10" },
    { id: 2, model: "Model 3", make: "Tesla", year: "2020", price: "10" },
    { id: 3, model: "Model X", make: "Tesla", year: "2020", price: "10" },
    { id: 4, model: "Model Y", make: "Tesla", year: "2021", price: "10" },
  ];

  return (
    <div className="container">
      <h1 id="head">Plan your trip</h1>
      <br />
      <RideForm
        cars={cars}
        source={source}
        destination={destination}
        setSource={setSource}
        setDestination={setDestination}
      />
      <br />
      <Map source={source} destination={destination} />
    </div>
  );
};

export default Ride;
