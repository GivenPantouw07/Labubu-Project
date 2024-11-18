import AboutImg from "../../assets/img/about.jpg";
import { Link } from "react-router-dom";
import Service from "../Service";
import Facts from "../Facts";
import Footer from "../Footer";
import { getDatabase, ref, onValue } from "firebase/database";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [home, setHome] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const homeRef = ref(db, "home");
    onValue(homeRef, (snapshot) => {
      const data = snapshot.val();
      setHome(data);
    });
  }, []);
  return (
    <div>
      <div className="carousel"></div>

      <div className="about">
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
                <Link className="btn btn-custom" to="/about">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Service />
      <Facts />
      <div>
        <div className="price">
          <div className="container">
            <div className="section-header text-center">
              <p>Washing Plan</p>
              <h2>Choose Your Plan</h2>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="price-item">
                  <div className="price-header">
                    <h3>Basic Cleaning</h3>
                    <h2>
                      <span>$</span>
                      <strong>25</strong>
                      <span>.99</span>
                    </h2>
                  </div>
                  <div className="price-body">
                    <ul>
                      <li>
                        <i className="far fa-check-circle" />
                        Seats Washing
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        Vacuum Cleaning
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        Exterior Cleaning
                      </li>
                      <li>
                        <i className="far fa-times-circle" />
                        Interior Wet Cleaning
                      </li>
                      <li>
                        <i className="far fa-times-circle" />
                        Window Wiping
                      </li>
                    </ul>
                  </div>
                  <div className="price-footer">
                    <Link className="btn btn-custom" to="/booking">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="price-item featured-item">
                  <div className="price-header">
                    <h3>Premium Cleaning</h3>
                    <h2>
                      <span>$</span>
                      <strong>35</strong>
                      <span>.99</span>
                    </h2>
                  </div>
                  <div className="price-body">
                    <ul>
                      <li>
                        <i className="far fa-check-circle" />
                        Seats Washing
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        Vacuum Cleaning
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        Exterior Cleaning
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        Interior Wet Cleaning
                      </li>
                      <li>
                        <i className="far fa-times-circle" />
                        Window Wiping
                      </li>
                    </ul>
                  </div>
                  <div className="price-footer">
                    <Link className="btn btn-custom" to="/booking">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="price-item">
                  <div className="price-header">
                    <h3>Complex Cleaning</h3>
                    <h2>
                      <span>$</span>
                      <strong>49</strong>
                      <span>.99</span>
                    </h2>
                  </div>
                  <div className="price-body">
                    <ul>
                      <li>
                        <i className="far fa-check-circle" />
                        Seats Washing
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        Vacuum Cleaning
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        Exterior Cleaning
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        Interior Wet Cleaning
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        Window Wiping
                      </li>
                    </ul>
                  </div>
                  <div className="price-footer">
                    <Link className="btn btn-custom" to="/booking">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
