import { Link } from "react-router-dom";
import Service from "../Service";
import Facts from "../Facts";
import Footer from "../Footer";
import { getDatabase, ref, onValue } from "firebase/database";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [home, setHome] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const homeRef = ref(db, "home");
    onValue(homeRef, (snapshot) => {
      const data = snapshot.val();
      setHome(data);
    });
  }, []);
  return (
    <div>
      <div className="carousel"></div>

      <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img
                  src={`data:image/jpg;base64,${home.about_img}`}
                  alt="About"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-header text-left">
                <p>{home.about_miniTitle}</p>
                <h2>{home.about_Title}</h2>
              </div>
              <div className="about-content">
                <p>{home.about_Paragraph}</p>
                <ul>
                  <li>
                    <i className="far fa-check-circle" />
                    {home.about_Text1}
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    {home.about_Text2}
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    {home.about_Text3}
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    {home.about_Text4}
                  </li>
                </ul>
                <Link className="btn btn-custom" to="/about">
                  {home.about_Button}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Service />
      <Facts />
      <div>
        <div className="price">
          <div className="container">
            <div className="section-header text-center">
              <p>{home.price_miniTitle}</p>
              <h2>{home.price_Title}</h2>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="price-item">
                  <div className="price-header">
                    <h3>{home.price_subTitle1}</h3>
                    <h2>
                      <span>{home.price_dollar}</span>
                      <strong>{home.price_numberBeforecoma1}</strong>
                      <span>{home.price_numberAftercoma}</span>
                    </h2>
                  </div>
                  <div className="price-body">
                    <ul>
                      <li>
                        <i className="far fa-check-circle" />
                        {home.price_Text1}
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        {home.price_Text2}
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        {home.price_Text3}
                      </li>
                      <li>
                        <i className="far fa-times-circle" />
                        {home.price_Text4}
                      </li>
                      <li>
                        <i className="far fa-times-circle" />
                        {home.price_Text5}
                      </li>
                    </ul>
                  </div>
                  <div className="price-footer">
                    <Link className="btn btn-custom" to="/booking">
                      {home.price_Button}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="price-item featured-item">
                  <div className="price-header">
                    <h3>{home.price_subTitle2}</h3>
                    <h2>
                      <span>{home.price_dollar}</span>
                      <strong>{home.price_numberBeforecoma2}</strong>
                      <span>{home.price_numberAftercoma}</span>
                    </h2>
                  </div>
                  <div className="price-body">
                    <ul>
                      <li>
                        <i className="far fa-check-circle" />
                        {home.price_Text1}
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        {home.price_Text2}
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        {home.price_Text3}
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        {home.price_Text4}
                      </li>
                      <li>
                        <i className="far fa-times-circle" />
                        {home.price_Text5}
                      </li>
                    </ul>
                  </div>
                  <div className="price-footer">
                    <Link className="btn btn-custom" to="/booking">
                      {home.price_Button}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="price-item">
                  <div className="price-header">
                    <h3>{home.price_subTitle3}</h3>
                    <h2>
                      <span>{home.price_dollar}</span>
                      <strong>{home.price_numberBeforecoma3}</strong>
                      <span>{home.price_numberAftercoma}</span>
                    </h2>
                  </div>
                  <div className="price-body">
                    <ul>
                      <li>
                        <i className="far fa-check-circle" />
                        {home.price_Text1}
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        {home.price_Text2}
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        {home.price_Text3}
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        {home.price_Text4}
                      </li>
                      <li>
                        <i className="far fa-check-circle" />
                        {home.price_Text5}
                      </li>
                    </ul>
                  </div>
                  <div className="price-footer">
                    <Link className="btn btn-custom" to="/booking">
                      {home.price_Button}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
