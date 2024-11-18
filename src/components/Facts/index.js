import React from "react";

const Facts = () => {
  return (
    <div
      className="facts"
      data-parallax="scroll"
      data-image-src="img/facts.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="facts-item">
              <i className="fa fa-map-marker-alt" aria-hidden="true" />{" "}
              <div className="facts-text">
                <h3 data-toggle="counter-up">25</h3>
                <p>Service Points</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="facts-item">
              <i className="fa fa-user" aria-hidden="true" />
              <div className="facts-text">
                <h3 data-toggle="counter-up">350</h3>
                <p>Engineers &amp; Workers</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="facts-item">
              <i className="fa fa-users" aria-hidden="true" />
              <div className="facts-text">
                <h3 data-toggle="counter-up">1500</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="facts-item">
              <i className="fa fa-check" aria-hidden="true" />
              <div className="facts-text">
                <h3 data-toggle="counter-up">5000</h3>
                <p>Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
