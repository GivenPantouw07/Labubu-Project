import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";

const Navbar = () => {
  const [blur, setBlur] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function blurHandler() {
      console.log("ScrollY:", window.scrollY);
      if (window.scrollY > 100) {
        setBlur(true);
      } else {
        setBlur(false);
      }
    }

    window.addEventListener("scroll", blurHandler);

    return () => {
      window.removeEventListener("scroll", blurHandler);
    };
  }, []);

  const [navbar, setNavbar] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const navbarRef = ref(db, "navbar");
    onValue(navbarRef, (snapshot) => {
      const data = snapshot.val();
      setNavbar(data);
    });
  }, []);

  return (
    <div className={`nav-bar ${blur ? "nav-sticky" : ""}`}>
      <nav
        className={`navbar navbar-expand-lg navbar-dark ${
          blur ? "navbar-blur" : ""
        }`}
      >
        <div className="container">
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav">
                <Link
                  to="/"
                  className={`nav-item nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                >
                  {navbar.Text1}
                </Link>
                <Link
                  to="/about"
                  className={`nav-item nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                >
                  {navbar.Text2}
                </Link>
                <Link
                  to="/price"
                  className={`nav-item nav-link ${
                    location.pathname === "/price" ? "active" : ""
                  }`}
                >
                  {navbar.Text3}
                </Link>
                <Link
                  to="/booking"
                  className={`nav-item nav-link ${
                    location.pathname === "/booking" ? "active" : ""
                  }`}
                >
                  {navbar.Text4}
                </Link>
                <Link
                  to="/payment"
                  className={`nav-item nav-link ${
                    location.pathname === "/payment" ? "active" : ""
                  }`}
                >
                  {navbar.Text5}
                </Link>
                <Link
                  to="/contact"
                  className={`nav-item nav-link ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                >
                  {navbar.Text6}
                </Link>
              </div>
            </div>

            <div
              className="row"
              style={{
                color: "red",
                fontWeight: "bold",
                fontStyle: "italic",
                fontSize: "35px",
                margin: "0px",
              }}
            >
              {navbar.Title_1}
            </div>
            <div
              style={{
                color: "white",
                fontWeight: "bold",
                fontStyle: "italic",
                fontSize: "38px",
              }}
            >
              {navbar.Title_2}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
