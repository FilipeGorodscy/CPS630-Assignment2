import React, { useState, useEffect } from "react";

import FormDropdown from "./FormDropdown";
import FormInput from "./FormInput";
import FormButtons from "./FormButtons";
import RidePreview from "./RidePreview";

const RideForm = ({ cars }) => {
  const [carID, setCarID] = useState(0);
  const [selectedCar, setSelectedCar] = useState({});
  const [source, setSource] = useState();
  const [destination, setDestination] = useState();

  useEffect(() => {
    //API CALL to retrieve data for selected car
    if (carID) {
      setSelectedCar(cars.filter((car) => car.id == carID)[0]);
    }
  }, [carID]);

  return (
    <form id="form">
      <div className="form-group">
        <FormDropdown cars={cars} setCarID={setCarID} setSelectedCar={setSelectedCar} />
        <br />
        {!!carID && (
          <>
            <FormInput setSource={setSource} setDestination={setDestination} />
            <br />
            <RidePreview car={selectedCar} source={source} destination={destination} />
            <br />
            <FormButtons />
          </>
        )}
      </div>
      <br />
      <div id="result"></div>
      <div id="map"></div>
    </form>
  );
};

export default RideForm;
