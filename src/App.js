import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Service from "./components/Service";
import Facts from "./components/Facts/indexx";
import Price from "./components/Price";
import Booking from "./components/Booking";

const App = () => {
  return (
    <Router>
      <div>
        <Topbar />
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/facts" element={<Facts />} />
          <Route path="/price" element={<Price />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
      {/* Carousel Start */}
      <div className="carousel">
        <div className="container-fluid">
          <div className="owl-carousel">
            <div className="carousel-item">
              <div className="carousel-img">
                <img
                  src="img/carousel-1.jpg"
                  alt="A car being washed and detailed"
                />
              </div>
              <div className="carousel-text">
                <h3>Washing &amp; Detailing</h3>
                <h1>Keep your Car Newer</h1>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris.
                  Vivamus egestas eleifend dui ac
                </p>
                <a className="btn btn-custom" href="/explore-more">
                  Explore More
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-img">
                <img src="img/carousel-2.jpg" alt="Quality car service" />
              </div>
              <div className="carousel-text">
                <h3>Washing &amp; Detailing</h3>
                <h1>Quality service for you</h1>
                <p>
                  Morbi sagittis turpis id suscipit feugiat. Suspendisse eu
                  augue urna. Morbi sagittis orci sodales
                </p>
                <a className="btn btn-custom" href="/quality-service">
                  Explore More
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-img">
                <img
                  src="img/carousel-3.jpg"
                  alt="Exterior and interior car washing"
                />
              </div>
              <div className="carousel-text">
                <h3>Washing &amp; Detailing</h3>
                <h1>Exterior &amp; Interior Washing</h1>
                <p>
                  Sed ultrices, est eget feugiat accumsan, dui nibh egestas
                  tortor, ut rhoncus nibh ligula euismod quam
                </p>
                <a
                  className="btn btn-custom"
                  href="/interior-exterior-washing"
                >
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel End */}
    </Router>
  );
};

export default App;
