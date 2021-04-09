import React from "react";

import "../styles/Footer.css";
import fg from "../images/Gorodscy.jpg";
import rk from "../images/RumGuru.png";
import mf from "../images/MatthewFranks.png";
import ss from "../images/SeitSorra.png";

const Footer = () => {
  return (
    <footer id="footer" className="fixed-bottom bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>

            <div>
              P2S is an online system that aims to plan for smart green trips inside the city and its neighborhood
              through sharing vehicles. P2S attempts to provide a smart green solution on this regard by matching up
              drivers who live, work, and finally drive in the same neighborhood and would like to provide trip
              services.
            </div>
          </div>

          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Developers</h5>

            <div>
              <div className="media">
                <img className="align-self-center mr-3 developers" src={fg} alt="FilipeGorodscy" />
                <div className="media-body">
                  <h5 className="mt-0">Filipe Gorodscy</h5>
                  <div className="mb-0">
                    <a href="https://github.com/FilipeGorodscy">github.com/FilipeGorodscy</a>
                  </div>
                </div>
              </div>
              <div className="media">
                <img className="align-self-center mr-3 developers" src={rk} alt="RumGuru" />
                <div className="media-body">
                  <h5 className="mt-0">Rahul Kothwal</h5>
                  <div className="mb-0">
                    <a href="https://github.com/RumGuru">github.com/RumGuru</a>
                  </div>
                </div>
              </div>
              <div className="media">
                <img className="align-self-center mr-3 developers" src={mf} alt="MatthewFranks" />
                <div className="media-body">
                  <h5 className="mt-0">Matthew Franks</h5>
                  <div className="mb-0">
                    <a href="https://github.com/mjfranks">github.com/mjfranks</a>
                  </div>
                </div>
              </div>
              <div className="media">
                <img className="align-self-center mr-3 developers" src={ss} alt="SeitSorra" />
                <div className="media-body">
                  <h5 className="mt-0">Seit Sorra</h5>
                  <div className="mb-0">
                    <a href="https://github.com/seitsorra">github.com/seitsorra</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
