import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

const Delivery = ({total, setTotal}) => {

const [flowers, setFlowers] = useState([]);

useEffect(() => {
    const fetchFlowers = async () => {
      const res = await axios.get("http://localhost/backend/flowers/read.php");
      const flowers = res.data.records;
      setFlowers(flowers);
    };
    fetchFlowers();
  }, []);
  
  return <div>Delivery service</div>;

};

export default Delivery;


/*const Ride = ({ total, setTotal }) => {
  const [source, setSource] = useState();
  const [destination, setDestination] = useState();
  const [distance, setDistance] = useState();
  const [cars, setCars] = useState([]);*/

// Flower object contains 
