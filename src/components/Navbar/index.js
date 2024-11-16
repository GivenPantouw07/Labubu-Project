import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Booking from '../Booking';
import Payment from '../Payment';
import Contact from '../Contact';


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
      <nav className={`navbar  navbar-expand-lg navbar-dark ${blur ? 'navbar-blur' : ""}`}>

        <div className="container">
            <a href="#" className="navbar-brand">MENU</a>
            {/* button for mobile */}
            <button 
            type="button" 
            className="navbar-toggler" 
            data-toggle="collapse" 
            data-target="#navbarCollapse">
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav mr-auto">
                <Link to="/" className={`nav-item nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                <Link to="/about" className={`nav-item nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
                <Link to="/booking" className={`nav-item nav-link ${location.pathname === '/booking' ? 'active' : ''}`}>Booking</Link>
                <Link to="/payment" className={`nav-item nav-link ${location.pathname === '/payment' ? 'active' : ''}`}>Payment</Link>
                <Link to="/contact" className={`nav-item nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
              </div>
            </div>
      </div>
    </nav>
  </div>

  );
};

export default Navbar;