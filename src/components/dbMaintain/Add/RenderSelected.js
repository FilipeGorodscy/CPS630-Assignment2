import React from "react";
import CarData from "./CarData";
import FlowerData from "./FlowerData";

const RenderSelected = ({ selected, insertData }) => {
  switch (selected) {
    case "CARS":
      return <CarData insertData={insertData} />;
    case "FLOWERS":
      return <FlowerData insertData={insertData} />;
    case "USERS":
      return <div>USERS</div>;
    case "TRIPS":
      return <div>TRIPS</div>;
    case "ORDERS":
      return <div>ORDERS</div>;
    default:
      <div></div>;
  }
  return null;
};

export default RenderSelected;
