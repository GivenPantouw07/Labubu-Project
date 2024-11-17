import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Service from "./components/Service";
import Facts from "./components/Facts/indexx";
import Price from "./components/Price";
import Booking from "./components/Booking";

const App = () => {
  return (
    <Router>
      <div>
        <Topbar />
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/facts" element={<Facts />} />
          <Route path="/price" element={<Price />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
      </Router>
  );
};

export default App;
