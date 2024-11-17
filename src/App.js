import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Price from "./components/Price";
import Payment from "./components/Payment";
import Contact from "./components/Contact";
import Booking from "./components/Booking";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />} />
              <Route path="/price" element={<Price />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/booking" element={<Booking />} />
              {/* <Route path="/service" element={<Service />} /> */}
            </Routes>
        </Router>

  );
};

export default App;
