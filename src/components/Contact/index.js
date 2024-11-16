import React from "react";

function Contact() {
  return (
    <div className="contact">
        {/* header page contact start */}
        <div className="page-header">
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <h2>Contact Us</h2>
                </div>
                <div className="col-12">
                    <a href="/">Home</a>
                    <a href="/contact">Contact</a>
                </div>
                </div>
            </div>
        </div>
        {/* header page contact end */}


        {/* main header contact start*/}
        <div className="container">
            <div className="section-header text-center">
                <p>Get Connected</p>
                <h2>We’re Here to Help</h2>

            </div>

            <div className="footer-row">
                <div className="quick-contact-info">
                    <h2>Connect with Us</h2>
                    <div className="contact-info-item">
                        <i className="far fa-clock"></i>
                        <div>
                            <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                            <p>Saturday - Sunday: Closed</p>
                        </div>
                    </div>
                    <div className="contact-info-item">
                        <i className="fa fa-map-marker-alt"></i>
                        <p>Walian Satu, Kec. Tomohon Sel., Kota Tomohon, Sulawesi Utara</p>
                    </div>
                    <div className="contact-info-item">
                        <i className="fa fa-phone-alt"></i>
                        <p>+62 812 3456 7890</p>
                    </div>
                    <div className="contact-info-item">
                        <i className="far fa-envelope"></i>
                        <p>AquariusCarWash@gmail.com</p>
                    </div>


                    <div className="social-icons">
                        <a href="https://web.facebook.com/p/Aquarius-Car-Wash-100072266081599/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://x.com/aquariuscarwash?mx=2" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/explore/locations/772508402882252/car-wash-aquarius/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://id.linkedin.com/company/aquarius-carwash" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

                <div className="contact-map">
                    <iframe
                    title="Google Maps - Location of Aquarius Car Wash"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7801361951474!2d124.8319288739596!3d1.30709659868049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32876b6418a97771%3A0x112f7e77d65e6c0a!2sAquarius%20Car%20Wash!5e0!3m2!1sid!2sid!4v1731788681399!5m2!1sid!2sid"
                    frameBorder="0"
                    style={{
                        width: "100%",
                        height: "300px"
                    }}></iframe>
                </div>
            </div>
        </div>
        {/* main header contact end */}


        
    </div>

  );
}

export default Contact;
