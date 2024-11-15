import React from 'react';

const Navbar = () => {
  return (
  <div className="nav-bar">
  <div className="container">
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <a href="#" className="navbar-brand">MENU</a>
      <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
        <div className="navbar-nav mr-auto">
          <a href="index.html" className="nav-item nav-link active">Home</a>
          <a href="about.html" className="nav-item nav-link">About</a>
          <a href="service.html" className="nav-item nav-link">Service</a>
          <a href="price.html" className="nav-item nav-link">Price</a>
          <a href="location.html" className="nav-item nav-link">Washing Points</a>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
            <div className="dropdown-menu">
              <a href="blog.html" className="dropdown-item">Blog Grid</a>
              <a href="single.html" className="dropdown-item">Detail Page</a>
              <a href="team.html" className="dropdown-item">Team Member</a>
              <a href="booking.html" className="dropdown-item">Schedule Booking</a>
            </div>
          </div>
          <a href="contact.html" className="nav-item nav-link">Contact</a>
        </div>
        <div className="ml-auto">
          <a className="btn btn-custom" href="#">Get Appointment</a>
        </div>
      </div>
    </nav>
  </div>
</div>

  );
};

export default Navbar;