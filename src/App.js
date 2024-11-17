import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Price, Payment, Contact, Booking, Navbar } from "./components";
import './index.css';


const App = () => {
  const RoutesConfig = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/price", component: Price },
    { path: "/payment", component: Payment },
    { path: "/contact", component: Contact },
    { path: "/booking", component: Booking },
  ];
  const renderRoutes = () =>
    RoutesConfig.map(({ path, component: Component }, index) => (
      <Route key={index} path={path} element={<Component />} />
    ));
    return (
      <Router>
        <Navbar />
      <Routes>
        {renderRoutes()}
      </Routes>
    </Router>

  );
};

export default App;
