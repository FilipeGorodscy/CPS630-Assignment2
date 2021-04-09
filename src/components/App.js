import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Register from "./Register";
import ShoppingCart from "./ShoppingCart";
import Ride from "./Ride";
import Checkout from "./Checkout";

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
      <Route path="/checkout" component={Checkout} />
      <Footer />
    </Router>
  );
};

export default App;
