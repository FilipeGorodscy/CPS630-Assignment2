import React from "react";

const FormDropdown = ({ cars, setCarID, setSelectedCar }) => {
  const onFormChange = (e) => {
    setCarID(e.target.value);
  };

  return (
    <div>
      <label for="cars">Available cars</label>
      <select onChange={(e) => onFormChange(e)} className="form-control" id="cars">
        <option defaultValue>Choose...</option>
        {cars.map((car) => {
          return <option key={car.id} value={car.id}>{`$${car.price} ${car.make} ${car.model} - ${car.year}`}</option>;
        })}
      </select>
    </div>
  );
};

export default FormDropdown;
