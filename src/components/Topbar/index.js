import React from 'react';

const Topbar = () => {
  return (
    <div className="top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="logo">
                {/* Ensure the href is valid. If it should navigate to the homepage, use a valid URL or React Router Link */}
                <a href="/home">
                  {" "}
                  {/* Updated href to a valid path */}
                  <h1>
                    Auto<span>Wash</span>
                  </h1>
                  {/* Uncomment and use a descriptive alt attribute if using an image */}
                  {/* <img src="img/logo.jpg" alt="AutoWash Logo" /> */}
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 d-none d-lg-block">
              <div className="row">
                <div className="col-4">
                  <div className="top-bar-item">
                    <div className="top-bar-icon">
                      <i className="far fa-clock" />
                    </div>
                    <div className="top-bar-text">
                      <h3>Opening Hour</h3>
                      <p>Mon - Fri, 8:00 - 9:00</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="top-bar-item">
                    <div className="top-bar-icon">
                      <i className="fa fa-phone-alt" />
                    </div>
                    <div className="top-bar-text">
                      <h3>Call Us</h3>
                      <p>+012 345 6789</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="top-bar-item">
                    <div className="top-bar-icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="top-bar-text">
                      <h3>Email Us</h3>
                      <p>info@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Topbar;
