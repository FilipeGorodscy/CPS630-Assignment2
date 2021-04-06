import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";
import HeaderDropdown from "./HeaderDropdown";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3 text-center align-center">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="Logo" />
              Gogo Cars
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <HeaderItem path="/">Home</HeaderItem>
              <HeaderItem path="about">About Us</HeaderItem>
              <HeaderItem path="contact">Contact Us</HeaderItem>
              <HeaderItem path="register">Sign Up</HeaderItem>
              <HeaderItem path="shopping-cart">Shopping Cart</HeaderItem>

              <HeaderDropdown title="Types of Services">
                <Link to="/ride" className="dropdown-item">
                  Ride to a destination
                </Link>
                <Link to="/deliver" className="dropdown-item">
                  Ride & Delivery
                </Link>
              </HeaderDropdown>

              <HeaderDropdown title="Database Maintain">
                <a href="../pages/ride.php" className="dropdown-item">
                  Ride to a destination
                </a>
                <a href="../pages/deliver.php" className="dropdown-item">
                  Ride & Delivery
                </a>
              </HeaderDropdown>

              <HeaderItem path="#">
                <form action="/">
                  <input className="btn btn-outline-secondary" type="submit" value="Logout" />
                </form>
              </HeaderItem>
              <HeaderItem path="#">
                <form method="post" className="navbar-form ml-3" role="search" action="/php-scripts/search.php">
                  <div className="form-group">
                    <input name="order_id" type="text" className="form-control" placeholder="Search by Order ID" />
                  </div>
                </form>
              </HeaderItem>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
