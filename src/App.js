import React from "react";
import './index.css';
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Payment from "./components/Payment";
import About from "./components/About";
import Contact from "./components/Contact";
import Booking from "./components/Booking";

const App = () => {
    return (
      <div>
        <Topbar />
        <Navbar />
        <Payment />
        <About />
        <Contact />
        <Booking />
      </div>
  );
};

export default App;
