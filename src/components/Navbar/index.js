import { useEffect, useState } from 'react';
import React from 'react';
import Payment from '../Payment';
import About from '../About';
import Contact from '../Contact';
import Booking from '../Booking';


const Navbar = () => {
  const [blur, setBlur] = useState(false);

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
                <a href="/" className="nav-item nav-link active">Home</a>
                <a href="/payment" className='nav-item nav-link'>Payment</a>
                <a href="/about" className="nav-item nav-link">About</a>
                <a href="/contact" className="nav-item nav-link">Contact</a>
                <a href="/booking" className="nav-item nav-link">Booking</a>
              </div>
            </div>
      </div>
    </nav>
  </div>

  );
};

export default Navbar;