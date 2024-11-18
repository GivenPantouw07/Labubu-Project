import React from "react";

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
                  123 Street, New York, USA
                </p>
                <p>
                  <i className="fa fa-phone-alt" />
                  +012 345 67890
                </p>
                <p>
                  <i className="fa fa-envelope" />
                  <a href="mailto:info@example.com">info@example.com</a>
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
              <a href="/about-us">About Us</a>
              <a href="/contact-us">Contact Us</a>
              <a href="/services">Our Services</a>
              <a href="/service-points">Service Points</a>
              <a href="/pricing-plan">Pricing Plan</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-link">
              <h2>Useful Links</h2>
              <a href="/terms-of-use">Terms of Use</a>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/cookies">Cookies</a>
              <a href="/help">Help</a>
              <a href="/faqs">FAQs</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-newsletter">
              <h2>Newsletter</h2>
              <form>
                <label htmlFor="full-name">Full Name</label>
                <input
                  className="form-control"
                  id="full-name"
                  placeholder="Full Name"
                  required
                />
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                />
                <button className="btn btn-custom" type="submit">
                  Submit
                </button>
              </form>
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
