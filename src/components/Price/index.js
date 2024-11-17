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
              <h2>Washing Plan</h2>
            </div>
            <div className="col-12">
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
          <div className="section-header text-center">
            <p>Washing Plan</p>
            <h2>Choose Your Plan</h2>
          </div>

          <div className="row">
            {/* Pricing Plan 1: Basic Cleaning */}
            <div className="col-md-4">
              <div className="price-item">
                <div className="price-header text-center">
                  <h3>Basic Cleaning</h3>
                  <h2>
                    <span>$</span>
                    <strong>45</strong>
                    <span>.000</span>
                  </h2>
                </div>
                <div className="arrow text-center my-3">
                  <i className="fas fa-arrow-down fa-2x"></i>
                </div>
                <div className="price-body">
                  <Link className="btn btn-custom btn-large" to="/details/basic">
                    <div>
                      <h4>Details</h4>
                      <p>
                        This plan includes seats washing, vacuum cleaning, and exterior cleaning. 
                       
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Pricing Plan 2: Premium Cleaning */}
            <div className="col-md-4">
              <div className="price-item">
                <div className="price-header text-center">
                  <h3>Premium Cleaning</h3>
                  <h2>
                    <span>$</span>
                    <strong>60</strong>
                    <span>.00</span>
                  </h2>
                </div>
                <div className="arrow text-center my-3">
                  <i className="fas fa-arrow-down fa-2x"></i>
                </div>
                <div className="price-body">
                  <Link className="btn btn-custom btn-large" to="/details/premium">
                    <div>
                      <h4>Details</h4>
                      <p>
                        This plan includes seats washing, vacuum cleaning, exterior cleaning, and interior wet cleaning. 
                        
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Pricing Plan 3: Complex Cleaning */}
            <div className="col-md-4">
              <div className="price-item">
                <div className="price-header text-center">
                  <h3>Complex Cleaning</h3>
                  <h2>
                    <span>$</span>
                    <strong>70</strong>
                    <span>.00</span>
                  </h2>
                </div>
                <div className="arrow text-center my-3">
                  <i className="fas fa-arrow-down fa-2x"></i>
                </div>
                <div className="price-body">
                  <Link className="btn btn-custom btn-large" to="/details/complex">
                    <div>
                      <h4>Details</h4>
                      <p>
                        This plan covers all services, including seats washing, vacuum cleaning, 
                        exterior cleaning, interior wet cleaning, window wiping, and free tire polish.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
