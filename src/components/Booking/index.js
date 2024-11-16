import React from 'react';
import { Link } from 'react-router-dom';

function Booking() {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Booking</h2>
            </div>
            <div className="col-12">
              <Link to="/">Home</Link>
              <Link to="/booking">Booking</Link>
            </div>
          </div>
        </div>
      </div>



      {/* Location Section */}
      <div className="location">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-header text-left">
                <p>Washing Points</p>
                <h2>Choose Your Car Washing Point</h2>
              </div>
              <div className="row">
                {[1, 2, 3, 4].map((_, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="location-item">
                      <i className="fa fa-map-marker-alt" />
                      <div className="location-text">
                        <h3>Car Washing Point {index + 1}</h3>
                        <p>123 Street, New York, USA</p>
                        <p><strong>Call:</strong> +012 345 6789</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Form */}
            <div className="col-lg-5">
              <div className="location-form">
                <h3>Request a Car Wash</h3>
                <form>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" required />
                  </div>
                  <div className="form-group">
                    <input type="datetime-local" className="form-control" placeholder="Preferred Time" required />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" placeholder="Additional Details" rows="3"></textarea>
                  </div>
                  <button type="submit" className="btn btn-custom">Pay Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
