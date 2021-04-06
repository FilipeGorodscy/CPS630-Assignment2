import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Register from "./Register";
import ShoppingCart from "./ShoppingCart";
import Ride from "./Ride";

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={AboutUs} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/register" component={Register} />
      <Route path="/shopping-cart" component={ShoppingCart} />
      <Route path="/ride" component={Ride} />
    </Router>
  );
};

export default App;
