import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-contact">
              <h2>Get In Touch</h2>
              <address>
                <p>
                  <i className="fa fa-map-marker-alt" />
                  Jalan Sudirman No. 10, Jakarta
                </p>
                <p>
                  <i className="fa fa-phone-alt" />
                  +012 345 67890
                </p>
                <p>
                  <i className="fa fa-envelope" />
                  <a href="mailto:info@example.com" style={{ color: 'white' }}>LabubuCW@gmail.com</a>
                </p>
              </address>
              <div className="footer-social">
                <a
                  className="btn"
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn"
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn"
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube" />
                </a>
                <a
                  className="btn"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  className="btn"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-link">
              <h2>Popular Links</h2>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/price">Pricing Plan</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container copyright">
        <p>
          © <a href="/home">LabubuCW</a>, All Rights Reserved. Designed By{" "}
          <a
            href="https://htmlcodex.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Labubu Project
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
