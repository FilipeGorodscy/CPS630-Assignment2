import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

import logo from "../../images/logo.png";

const Header = ({ username }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="xl">
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
        <Link to="/signInUp" className="nav-link">
          Sign In/Up
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
      {username === "admin" && (
        <NavDropdown title="Database Maintain" id="basic-nav-dropdown">
          <Link to="/add" className="dropdown-item">
            ADD
          </Link>
          <Link to="/delete" className="dropdown-item">
            DELETE
          </Link>
          <Link to="/edit" className="dropdown-item">
            EDIT
          </Link>
          <Link to="/search" className="dropdown-item">
            SEARCH
          </Link>
        </NavDropdown>
      )}
      <Form inline>
        <FormControl type="text" placeholder="Search" />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Navbar>
  );
};

export default Header;
