import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

import logo from "../images/logo.png";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Logo" />
      </Link>
      <Nav className="mr-auto">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About Us
        </Link>
        <Link to="/contact" className="nav-link">
          Contact Us
        </Link>
        <Link to="/register" className="nav-link">
          Sign Up
        </Link>
        <Link to="/shopping-cart" className="nav-link">
          Shopping Cart
        </Link>
        <NavDropdown title="Types of Services" id="basic-nav-dropdown">
          <Link to="/ride" className="dropdown-item">
            Ride to a destination
          </Link>
          <Link to="/deliver" className="dropdown-item">
            Ride & Delivery
          </Link>
        </NavDropdown>
      </Nav>
      {/* Only show if logged as admin - set state equal to session php arr*/}
      <NavDropdown title="Database Maintain" id="basic-nav-dropdown">
        <Link to="/ride" className="dropdown-item">
          Ride to a destination
        </Link>
        <Link to="/deliver" className="dropdown-item">
          Ride & Delivery
        </Link>
      </NavDropdown>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Navbar>
  );
};

export default Header;
