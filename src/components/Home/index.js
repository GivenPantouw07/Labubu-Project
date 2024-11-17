import React from "react";
import About from "../About";
import Service from "../Service";
import Facts from "../Facts"
import Price from "../Price";
import Footer from "../Footer";

function Home() {
  return (
    <div>
      <About />
      <Service />
      <Facts />
      <Price />
      <Footer />
    </div>
  );
}

export default Home;
