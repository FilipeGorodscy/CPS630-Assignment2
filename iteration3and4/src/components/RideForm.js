import React, { useState } from "react";
import FormDropdown from "./FormDropdown";
import FormInput from "./FormInput";

const RideForm = ({ cars }) => {
  const [selectedCar, setSelectedCar] = useState(false);

  return (
    <form id="form">
      <div className="form-group">
        <FormDropdown cars={cars} setSelectedCar={setSelectedCar} />
        <br />
        {selectedCar && <FormInput />}
      </div>
      <br />
      <div id="result"></div>
      <div id="map"></div>
    </form>
  );
};

export default RideForm;
