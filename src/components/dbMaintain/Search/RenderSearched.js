import React from "react";
import CarsSearched from "./CarsSearched";
import FlowersSearched from "./FlowersSearched";
import TripsSearched from "./TripsSearched";

const RenderSearched = ({ selected, data }) => {
  switch (selected) {
    case "cars":
      return <CarsSearched data={data} />;
    case "flowers":
      return <FlowersSearched data={data} />;
    case "trips":
      return <TripsSearched data={data} />;

    default:
      <div></div>;
  }
  return null;
};

export default RenderSearched;
