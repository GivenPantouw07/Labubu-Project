import React from 'react';

const Price = () => {
  return (
    <div>
      {/* header page */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Washing Plan</h2>
            </div>
            <div className="col-12">
              <a href="/">Home</a>
              <a href="/price">Price</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="price">
          <div className="container">
            <div className="section-header text-center">
              <p>Washing Plan</p>
              <h2>Choose Your Plan</h2>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="price-item">
                  <div className="price-header">
                    <h3>Basic Cleaning</h3>
                    <h2>
                      <span>$</span>
                      <strong>25</strong>
                      <span>.99</span>
                    </h2>
                  </div>
                  <div className="price-body">
                    <ul>
                      <li>
                        <i className="far fa-check-circle" />
                        Seats Washing
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        Vacuum Cleaning
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        Exterior Cleaning
                      </li>
                      <li>
                        <i className="far fa-times-circle" />
                        Interior Wet Cleaning
                      </li>
                      <li>
                        <i className="far fa-times-circle" />
                        Window Wiping
                      </li>
                    </ul>
                  </div>
                  <div className="price-footer">
                    <a className="btn btn-custom" href>
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="price-item featured-item">
                  <div className="price-header">
                    <h3>Premium Cleaning</h3>
                    <h2>
                      <span>$</span>
                      <strong>35</strong>
                      <span>.99</span>
                    </h2>
                  </div>
                  <div className="price-body">
                    <ul>
                      <li>
                        <i className="far fa-check-circle" />
                        Seats Washing
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        Vacuum Cleaning
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        Exterior Cleaning
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        Interior Wet Cleaning
                      </li>
                      <li>
                        <i className="far fa-times-circle" />
                        Window Wiping
                      </li>
                    </ul>
                  </div>
                  <div className="price-footer">
                    <a className="btn btn-custom" href>
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="price-item">
                  <div className="price-header">
                    <h3>Complex Cleaning</h3>
                    <h2>
                      <span>$</span>
                      <strong>49</strong>
                      <span>.99</span>
                    </h2>
                  </div>
                  <div className="price-body">
                    <ul>
                      <li>
                        <i className="far fa-check-circle" />
                        Seats Washing
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        Vacuum Cleaning
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        Exterior Cleaning
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        Interior Wet Cleaning
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        Window Wiping
                      </li>
                    </ul>
                  </div>
                  <div className="price-footer">
                    <a className="btn btn-custom" href>
                      Book Now
                    </a>
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
