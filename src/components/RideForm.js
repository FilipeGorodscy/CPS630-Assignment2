import React, { useState, useEffect } from "react";
import axios from "axios";

import FormDropdown from "./FormDropdown";
import FormInput from "./FormInput";
import FormButtons from "./FormButtons";
import RidePreview from "./RidePreview";

const RideForm = ({ total, setTotal, distance, cars, source, setSource, destination, setDestination }) => {
  const [carID, setCarID] = useState(0);
  const [selectedCar, setSelectedCar] = useState({});

  useEffect(() => {
    if (carID) {
      setSelectedCar(cars.filter((car) => car.id === carID)[0]);
    }
  }, [carID, cars]);

  const validateConfirmation = () => selectedCar && source && destination;

  const checkout = () => {
    axios.post("http://localhost/backend/trip/create.php", {
      source: source,
      destination: destination,
      distance: distance,
      price: total,
      date: "April 11, 2021",
      time: "14:30",
      car_id: carID,
      user_id: 1,
    });
  };

  return (
    <form id="form">
      <div className="form-group">
        <FormDropdown cars={cars} setCarID={setCarID} setSelectedCar={setSelectedCar} />
        <br />
        {!!carID && (
          <>
            <FormInput setSource={setSource} setDestination={setDestination} />
            <br />
            <RidePreview
              car={selectedCar}
              source={source}
              destination={destination}
              distance={distance}
              setTotal={setTotal}
            />
            <br />
            <FormButtons checkout={checkout} price={total} validateConfirmation={validateConfirmation} />
          </>
        )}
      </div>
    </form>
  );
};

export default RideForm;
