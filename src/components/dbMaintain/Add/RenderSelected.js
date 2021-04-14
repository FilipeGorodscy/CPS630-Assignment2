import React from "react";
import CarData from "./CarData";
import FlowerData from "./FlowerData";
import TripData from "./TripData";

const RenderSelected = ({ selected, insertData }) => {
  switch (selected) {
    case "CARS":
      return <CarData insertData={insertData} />;
    case "FLOWERS":
      return <FlowerData insertData={insertData} />;
    case "TRIPS":
      return <TripData insertData={insertData} />;
    case "ORDERS":
      return <div>ORDERS</div>;
    default:
      <div></div>;
  }
  return null;
};

export default RenderSelected;
