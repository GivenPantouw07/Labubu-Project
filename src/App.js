import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Payment from "./components/Payment";
import About from "./components/About";
import Contact from "./components/Contact";
import Booking from "./components/Booking";

const App = () => {
    return (
      <Router>
        <div>
          <Topbar />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/payment" element={<Payment />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            {/* <Route path="/service" element={<Service />} /> */}
          </Routes>
        </div>
      </Router>
  );
};

export default App;
