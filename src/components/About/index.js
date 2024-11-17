import React from "react";
import AboutImg from "../../assets/img/about.jpg";
import Footer from "../Footer";
const About = () => {
  return (
    <div>
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
                  Lorem ipsum dolor sit amet elit. In vitae turpis. Donec in
                  hendre dui, vel blandit massa. Ut vestibu suscipi cursus. Cras
                  quis porta nulla, ut placerat risus. Aliquam nec magna eget
                  velit luctus dictum
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

      <Footer />
    </div>
  );
};

export default About;
