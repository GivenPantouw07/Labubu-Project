import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const [blur, setBlur] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    function blurHandler() {
      console.log("ScrollY:", window.scrollY);
      if (window.scrollY > 100) {
        setBlur(true);
      } else{
        setBlur(false);
      }
    }

    window.addEventListener('scroll', blurHandler);

    return () => {
      window.removeEventListener('scroll', blurHandler);
    };
  }, []);

  return (
    <div className={`nav-bar ${blur ? 'nav-sticky' : ''}`}>
      <nav className={`navbar navbar-expand-lg navbar-dark ${blur ? 'navbar-blur' : ""}`}>
        <div className="container d-flex justify-content-between align-items-center">

            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav">
                <Link to="/" className={`nav-item nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                <Link to="/about" className={`nav-item nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
                <Link to="/price" className={`nav-item nav-link ${location.pathname === '/price' ? 'active' : ''}`}>Price</Link>
                <Link to="/booking" className={`nav-item nav-link ${location.pathname === '/booking' ? 'active' : ''}`}>Booking</Link>
                <Link to="/payment" className={`nav-item nav-link ${location.pathname === '/payment' ? 'active' : ''}`}>Payment</Link>
                <Link to="/contact" className={`nav-item nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
              </div>
            </div>
            
            {/* <div className="navbar-brand logo-no-blur">
            <h1 className="nav-logo" style={{ color: 'red', fontSize: '24px' }}>
              Auto<span>Wash</span>
            </h1>
          </div> */}
        </div>
      </nav>
    </div>

  );
};

export default Navbar;