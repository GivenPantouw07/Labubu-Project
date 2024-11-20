import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import { CSSTransition } from "react-transition-group";
import { getDatabase, ref, onValue } from "firebase/database";

const Contact = () => {
    const [headerVisible, setHeaderVisible] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);
    const [contact, setContact] = useState();
  
    useEffect(() => {
        const db = getDatabase();
        const contactRef = ref(db, "contact");

        onValue(contactRef, (snapshot) => {
            const data = snapshot.val();
            setContact(data);

        setHeaderVisible(true);
        setTimeout(() => {
            setContentVisible(true);
        }, 500);
      });
    }, []);

    if (!contact) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div className="page-header">
                <div className="container">
                <CSSTransition in={headerVisible} timeout={500} classNames="fade" unmountOnExit appear>
                    <div className="row">
                        <div className="col-12">
                        <h2>{contact.header}</h2>
                        </div>
                        <div className="col-12">
                        <Link to="/">{contact.title2}</Link>    
                        <Link to="/contact">{contact.subtitle2}</Link>
                        </div>
                    </div>
                </CSSTransition>
                </div>
            </div>

            <CSSTransition in={contentVisible} timeout={500} classNames="zoom" unmountOnExit appear>
            <div className="contact">
                {/* main header contact start*/}
                <div className="container">
                    <div className="section-header text-center">
                        <p>{contact.miniTitle}</p>
                        <h2>{contact.title}</h2>

                    </div>

                    <div className="footer-row">
                        <div className="quick-contact-info">
                            <h2>{contact.subTitle}</h2>
                            <div className="contact-info-item">
                                <i className="far fa-clock"></i>
                                <div>
                                    <p>{contact.text5}</p>
                                    <p>{contact.text1}</p>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <i className="fa fa-map-marker-alt"></i>
                                <p>{contact.text2}</p>
                            </div>
                            <div className="contact-info-item">
                                <i className="fa fa-phone-alt"></i>
                                <p>{contact.text3}</p>
                            </div>
                            <div className="contact-info-item">
                                <i className="far fa-envelope"></i>
                                <p>{contact.text4}</p>
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.346697258057!2d106.81115107409617!3d-6.217929160899348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f154b5d3a033%3A0x5668a39e64aca18!2sJl.%20Jend.%20Sudirman%20No.10%2C%20RT.14%2FRW.1%2C%20Bend.%20Hilir%2C%20Kecamatan%20Tanah%20Abang%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010210!5e0!3m2!1sen!2sid!4v1731817470257!5m2!1sen!2sid"
                            frameBorder="0"
                            style={{
                                width: "100%",
                                height: "300px"
                            }}></iframe>
                        </div>
                    </div>
                </div>
                {/* main header contact end */}
                <Footer />        
            </div>
            </CSSTransition>
        </div>
    );
};

export default Contact;
