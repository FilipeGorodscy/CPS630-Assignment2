import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../styles/Footer.css";
import fg from "../images/Gorodscy.jpg";
import rk from "../images/RumGuru.png";
import mf from "../images/MatthewFranks.png";
import ss from "../images/SeitSorra.png";
import Developers from "./Developers";

const Footer = () => {
  return (
    <footer id="footer" className="fixed-bottom bg-light text-center text-lg-start">
      <Container className="p-4">
        <Row>
          <Col lg={6} md={12} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>

            <div>
              Gogo Cars is an online system that aims to plan for smart green trips inside the city and its neighborhood
              through sharing vehicles. Gogo Cars attempts to provide a smart green solution on this regard by matching
              up drivers who live, work, and finally drive in the same neighborhood and would like to provide trip
              services.
            </div>
          </Col>

          <Col lg={6} md={12} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Developers</h5>

            <div>
              <Developers src={fg} name="Filipe Gorodscy" github="github.com/FilipeGorodscy" />
              <Developers src={rk} name="Rahul Kothwal" github="github.com/RumGuru" />
              <Developers src={mf} name="Matthew Franks" github="github.com/mjfranks" />
              <Developers src={ss} name="Seit Sorra" github="github.com/seitsorra" />
            </div>
          </Col>
        </Row>
      </Container>

      <div className="text-center p-3 bg-dark">
        <span className="text-light">© 2020 Copyright: </span>
        <a className="text-light" href="https://github.com/RumGuru/P.2.S">
          Gogo Cars Github Repository
        </a>
      </div>
    </footer>
  );
};

export default Footer;
