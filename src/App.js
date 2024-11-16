import React from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Service from "./components/Service";
import Facts from "./components/Facts/indexx";
import Price from "./components/Price";

const App = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <About />
      <Service />
      <Facts />
      <Price />
      {/* Carousel Start */}
      <div className="carousel">
        <div className="container-fluid">
          <div className="owl-carousel">
            <div className="carousel-item">
              <div className="carousel-img">
                <img
                  src="img/carousel-1.jpg"
                  alt="A car being washed and detailed"
                />{" "}
                {/* Updated alt text */}
              </div>
              <div className="carousel-text">
                <h3>Washing &amp; Detailing</h3>
                <h1>Keep your Car Newer</h1>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris.
                  Vivamus egestas eleifend dui ac
                </p>
                <a className="btn btn-custom" href="/explore-more">
                  {" "}
                  {/* Updated href */}
                  Explore More
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-img">
                <img src="img/carousel-2.jpg" alt="Quality car service" />{" "}
                {/* Updated alt text */}
              </div>
              <div className="carousel-text">
                <h3>Washing &amp; Detailing</h3>
                <h1>Quality service for you</h1>
                <p>
                  Morbi sagittis turpis id suscipit feugiat. Suspendisse eu
                  augue urna. Morbi sagittis orci sodales
                </p>
                <a className="btn btn-custom" href="/quality-service">
                  {" "}
                  {/* Updated href */}
                  Explore More
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-img">
                <img
                  src="img/carousel-3.jpg"
                  alt="Exterior and interior car washing"
                />{" "}
                {/* Updated alt text */}
              </div>
              <div className="carousel-text">
                <h3>Washing &amp; Detailing</h3>
                <h1>Exterior &amp; Interior Washing</h1>
                <p>
                  Sed ultrices, est eget feugiat accumsan, dui nibh egestas
                  tortor, ut rhoncus nibh ligula euismod quam
                </p>
                <a className="btn btn-custom" href="/interior-exterior-washing">
                  {" "}
                  {/* Updated href */}
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel End */}
    </div>
  );
};

export default App;
