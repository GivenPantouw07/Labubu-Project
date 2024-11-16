import React from 'react';

const Navbar = () => {
  return (
    <div className="nav-bar">
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <a href="/menu" className="navbar-brand">
          {" "}
          {/* Updated href to a valid path */}
          MENU
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav mr-auto">
            <a href="/home" className="nav-item nav-link active">
              {" "}
              {/* Updated href */}
              Home
            </a>
            <a href="/about" className="nav-item nav-link">
              {" "}
              {/* Updated href */}
              About
            </a>
            <a href="/service" className="nav-item nav-link">
              {" "}
              {/* Updated href */}
              Service
            </a>
            <a href="/price" className="nav-item nav-link">
              {" "}
              {/* Updated href */}
              Price
            </a>
            <a href="/location" className="nav-item nav-link">
              {" "}
              {/* Updated href */}
              Washing Points
            </a>
            <div className="nav-item dropdown">
              <a
                href="/pages" // Updated to a valid URL
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages
              </a>
              <div className="dropdown-menu">
                <a href="/blog" className="dropdown-item">
                  Blog Grid
                </a>
                <a href="/single" className="dropdown-item">
                  Detail Page
                </a>
                <a href="/team" className="dropdown-item">
                  Team Member
                </a>
                <a href="/booking" className="dropdown-item">
                  Schedule Booking
                </a>
              </div>
            </div>
            <a href="/contact" className="nav-item nav-link">
              {" "}
              {/* Updated href */}
              Contact
            </a>
          </div>
          <div className="ml-auto">
            <a className="btn btn-custom" href="/appointment">
              {" "}
              {/* Updated href */}
              Get Appointment
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>

  );
};

export default Navbar;