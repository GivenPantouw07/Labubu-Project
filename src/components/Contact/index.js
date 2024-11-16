import React from "react";

function Contact() {
  return (
    <div className="contact">
        <div className="container">
            <div className="section-header text-center">
                <h2>Contact Us</h2>
                <p>
                    We are always ready to assist you with your inquiries, feedback, or
                    questions. Feel free to reach out through the contact information below.
                </p>
            </div>

            <div className="footer-row">
                <div className="quick-contact-info">
                    <h2>Quick Contact Info</h2>
                    <div className="contact-info-item">
                        <i className="far fa-clock"></i>
                        <div>
                            <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                            <p>Saturday - Sunday: Closed</p>
                        </div>
                    </div>
                    <div className="contact-info-item">
                        <i className="fa fa-map-marker-alt"></i>
                        <p>123 Main Street, YourCity, YourCountry</p>
                    </div>
                    <div className="contact-info-item">
                        <i className="fa fa-phone-alt"></i>
                        <p>+012 345 6789</p>
                    </div>
                    <div className="contact-info-item">
                        <i className="far fa-envelope"></i>
                        <p>LabubuCarWash911@gmail.com</p>
                    </div>


                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

                <div className="contact-map">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1600663868074!5m2!1sen!2sbd"
                    frameBorder="0"
                    style={{
                        width: "100%",
                        height: "300px"
                    }}></iframe>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Contact;
