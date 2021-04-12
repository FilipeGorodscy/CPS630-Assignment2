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

const App = () => {
  const [total, setTotal] = useState();
  return (
    <Router basename="/react">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={AboutUs} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/register" component={Register} />
      <Route
        path="/shopping-cart"
        render={() => (
          <Container className="mt-5">
            <ShoppingCart />
          </Container>
        )}
      />
      <Route path="/ride" render={() => <Ride total={total} setTotal={setTotal} />} />
      <Route path="/checkout" render={() => <Checkout total={total} />} />
      <Footer />
    </Router>
  );
};

export default App;
