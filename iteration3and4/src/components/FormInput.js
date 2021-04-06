import React from "react";

const FormInput = () => {
  return (
    <div>
      <label for="source">Source</label>
      <input className="form-control" id="source" placeholder="Enter source address" />
      <br />
      <label for="destination">Destination</label>
      <input className="form-control" id="destination" placeholder="Enter destination address" />
    </div>
  );
};

export default FormInput;
