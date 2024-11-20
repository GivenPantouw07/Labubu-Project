/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from 'react-router-dom';
import Team from "./Team";
import Footer from "../Footer";
import { getDatabase, ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

const About = () => {
  const [about, setAbout] = useState({});
  const [HeaderVisible, setHeaderVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
      setHeaderVisible(true);
      setTimeout(() => setContentVisible(true), 500);
    });
  }, []);

  return (
    <div>
      <div className="about">
        <div className="page-header">
          <div className="container">
          <CSSTransition in={contentVisible} timeout={500} classNames="fade" unmountOnExit appear>
            <div className="row">
              <div className="col-12">
                <h2>{about.miniTitle}</h2>
              </div>
              <div className="col-12">
                <Link to="/">{about.navbar_subTitle1}</Link>
                <Link to="/about">{about.navbar_subTitle2}</Link>
              </div>
            </div>
          </CSSTransition>
          </div>
        </div>

        <CSSTransition in={contentVisible} timeout={500} classNames="fade" unmountOnExit appear>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src={`data:image/jpg;base64,${about.img1}`} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-header text-left">
                <p>{about.miniTitle}</p>
                <h2>{about.Title}</h2>
              </div>
              <div className="about-content">
                <p>{about.Paragraph}</p>
                <ul>
                  <li>
                    <i className="far fa-check-circle" />
                    {about.subTitle1}
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    {about.subTitle2}
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    {about.subTitle3}
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    {about.subTitle4}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </CSSTransition>
      </div>
      <Team />
      <Footer />
    </div>
  );
};

export default About;
