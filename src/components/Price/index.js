import React from 'react';
import { Link } from 'react-router-dom';

const Price = () => {
  return (
    <div>
      {/* Section header for the Price Page */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Washing Plan</h2> {/* Main heading of the page */}
            </div>
            <div className="col-12">
              {/* Breadcrumb navigation */}
              <Link to="/">Home</Link> 
              <span> / </span>
              <Link to="/price">Price</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main pricing section */}
      <div className="price">
        <div className="container">
          {/* Section header with title and subtitle */}
          <div className="section-header text-center">
            <p>Washing Plan</p> {/* Subheading */}
            <h2>Choose Your Plan</h2> {/* Title */}
          </div>

          <div className="row">
            {/* Pricing Plan 1: Basic Cleaning */}
            <div className="col-md-4">
              <div className="price-item">
                <div className="price-header">
                  <h3>Basic Cleaning</h3> {/* Plan name */}
                  <h2>
                    <span>Rp</span>
                    <strong>45</strong>
                    <span>.000</span>
                  </h2> {/* Plan price */}
                </div>
                <div className="price-body">
                  {/* List of features */}
                  <ul>
                    <li><i className="far fa-check-circle" /> Seats Washing</li>
                    <li><i className="far fa-check-circle" /> Vacuum Cleaning</li>
                    <li><i className="far fa-check-circle" /> Exterior Cleaning</li>
                    <li><i className="far fa-times-circle" /> Interior Wet Cleaning</li>
                    <li><i className="far fa-times-circle" /> Window Wiping</li>
                    <li><i className="far fa-times-circle" /> Tire Polish</li>
                  </ul>
                </div>
                <div className="price-footer">
                  {/* Button for booking */}
                  <Link className="btn btn-custom" to="/booking">Book Now</Link>
                </div>
              </div>
            </div>

            {/* Pricing Plan 2: Premium Cleaning */}
            <div className="col-md-4">
              <div className="price-item featured-item">
                <div className="price-header">
                  <h3>Premium Cleaning</h3> {/* Plan name */}
                  <h2>
                    <span>Rp</span>
                    <strong>60</strong>
                    <span>.000</span>
                  </h2> {/* Plan price */}
                </div>
                <div className="price-body">
                  {/* List of features */}
                  <ul>
                    <li><i className="far fa-check-circle" /> Seats Washing</li>
                    <li><i className="far fa-check-circle" /> Vacuum Cleaning</li>
                    <li><i className="far fa-check-circle" /> Exterior Cleaning</li>
                    <li><i className="far fa-check-circle" /> Interior Wet Cleaning</li>
                    <li><i className="far fa-times-circle" /> Window Wiping</li>
                    <li><i className="far fa-times-circle" /> Tire Polish</li>
                  </ul>
                </div>
                <div className="price-footer">
                  {/* Button for booking */}
                  <Link className="btn btn-custom" to="/booking">Book Now</Link>
                </div>
              </div>
            </div>

            {/* Pricing Plan 3: Complex Cleaning */}
            <div className="col-md-4">
              <div className="price-item">
                <div className="price-header">
                  <h3>Complex Cleaning</h3> {/* Plan name */}
                  <h2>
                    <span>Rp</span>
                    <strong>70</strong>
                    <span>.000</span>
                  </h2> {/* Plan price */}
                </div>
                <div className="price-body">
                  {/* List of features */}
                  <ul>
                    <li><i className="far fa-check-circle" /> Seats Washing</li>
                    <li><i className="far fa-check-circle" /> Vacuum Cleaning</li>
                    <li><i className="far fa-check-circle" /> Exterior Cleaning</li>
                    <li><i className="far fa-check-circle" /> Interior Wet Cleaning</li>
                    <li><i className="far fa-check-circle" /> Window Wiping</li>
                    <li><i className="far fa-check-circle" /> Tire Polish</li>
                  </ul>
                </div>
                <div className="price-footer">
                  {/* Button for booking */}
                  <Link className="btn btn-custom" to="/booking">Book Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;