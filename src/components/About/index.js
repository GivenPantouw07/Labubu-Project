import React from "react";
import { Link } from 'react-router-dom';
import AboutImg from "../../assets/img/about.jpg";
import Team from "./Team";
import Footer from "../Footer";

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>About Us</h2>
              </div>
              <div className="col-12">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
              </div>
            </div>
          </div>
        </div>


        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src={AboutImg} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-header text-left">
                <p>About Us</p>
                <h2>car washing and detailing</h2>
              </div>
              <div className="about-content">
                <p>
                  Services are essential to maintaining the appearance and
                  longevity of your vehicle. These services include thorough
                  exterior cleaning, interior vacuuming, waxing, polishing, and
                  restoring the car to a near showroom finish. Whether it’s
                  removing stubborn dirt or enhancing the paint’s shine,
                  professional detailing ensures your vehicle looks and feels
                  brand new. Keep your car in top condition with regular washing
                  and detailing tailored to your needs.
                </p>
                <ul>
                  <li>
                    <i className="far fa-check-circle" />
                    Seats washing
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    Vacuum cleaning
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    Interior wet cleaning
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    Window wiping
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Team />
      <Footer />
    </div>
  );
};

export default About;
