import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../Basic/Header";
import Footer from "../Basic/Footer";
import Home from "../Basic/Home";
import ContactUs from "../Basic/ContactUs";
import Register from "./Register";
import ShoppingCart from "../Checkout-ShoppingCart/ShoppingCart";
import Ride from "../Ride/Ride";
import Checkout from "../Checkout-ShoppingCart/Checkout";
import { Container } from "react-bootstrap";
import Login from "./Login";
import RideGreen from "../RideGreen/RideGreen";
import SignInUp from "./SignInUp";
import Delivery from "../Delivery/Delivery";
import Add from "../dbMaintain/Add/Add";
import Delete from "../dbMaintain/Delete/Delete";
import AboutUs from "../Basic/AboutUs";
import GroceryDelivery from '../Groceries/GroceryDelivery';

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
      <Route path="/deliver" render={() => <Delivery total={total} setTotal={setTotal} />} />
      <Route path="/grocery" render={() => <GroceryDelivery total={total} setTotal={setTotal} />} />
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
      <Route path="/delete" component={Delete} />
      <Footer />
    </Router>
  );
};

export default App;
