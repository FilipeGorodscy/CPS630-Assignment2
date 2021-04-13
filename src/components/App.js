import React, { useState } from "react";
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
import { Container } from "react-bootstrap";
import Login from "./Login";
import RideGreen from "./RideGreen";
import SignInUp from "./SignInUp";
import Delivery from "./Delivery";
import Add from "./dbMaintain/Add/Add";

const App = () => {
  const [total, setTotal] = useState();
  const [username, setUsername] = useState();
  return (
    <Router basename="/react">
      <Header username={username} />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={AboutUs} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/signInUp" render={() => <SignInUp setUsername={setUsername} />} />
      <Route path="/register" component={Register} />
      <Route path="/deliver" render={() => <Ride total={total} setTotal={setTotal} />} />
      <Route path="/login" render={() => <Login setUsername={setUsername} />} />
      <Route
        path="/shopping-cart"
        render={() => (
          <Container className="mt-5">
            <ShoppingCart />
          </Container>
        )}
      />
      <Route path="/ride" render={() => <Ride total={total} setTotal={setTotal} />} />
      <Route path="/ride-green" render={() => <RideGreen total={total} setTotal={setTotal} />} />
      <Route path="/checkout" render={() => <Checkout total={total} />} />
      <Route path="/add" component={Add} />
      <Footer />
    </Router>
  );
};

export default App;
