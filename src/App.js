import React from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Service from "./components/Service";

const App = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <About />
      <Service />
    </div>
  );
};

export default App;
