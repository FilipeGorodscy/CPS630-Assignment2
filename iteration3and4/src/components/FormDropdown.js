import React from "react";

const FormDropdown = ({ cars, setSelectedCar }) => {
  return (
    <div>
      <label for="cars">Available cars</label>
      <select onChange={() => setSelectedCar(true)} className="form-control" id="cars">
        <option defaultValue>Choose...</option>
        {cars.map((car) => {
          return <option key={car.id}>{`$${car.price} ${car.make} ${car.model} - ${car.year}`}</option>;
        })}
      </select>
    </div>
  );
};

export default FormDropdown;
