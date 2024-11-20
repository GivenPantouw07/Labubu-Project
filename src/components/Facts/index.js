import { getDatabase, ref, onValue } from "firebase/database";
import React, { useState, useEffect } from "react";

const Facts = () => {
  const [facts, setFacts] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const factsRef = ref(db, "facts");
    onValue(factsRef, (snapshot) => {
      const data = snapshot.val();
      setFacts(data);
    });
  }, []);
  return (
    <div
      className="facts"
      data-parallax="scroll"
      data-image-src="img/facts.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="facts-item">
              <i className="fa fa-map-marker-alt" aria-hidden="true" />{" "}
              <div className="facts-text">
                <h3 data-toggle="counter-up">{facts.number1}</h3>
                <p>{facts.text1}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="facts-item">
              <i className="fa fa-user" aria-hidden="true" />
              <div className="facts-text">
                <h3 data-toggle="counter-up">{facts.number2}</h3>
                <p>{facts.text2}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="facts-item">
              <i className="fa fa-users" aria-hidden="true" />
              <div className="facts-text">
                <h3 data-toggle="counter-up">{facts.number3}</h3>
                <p>{facts.text3}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="facts-item">
              <i className="fa fa-check" aria-hidden="true" />
              <div className="facts-text">
                <h3 data-toggle="counter-up">{facts.number4}</h3>
                <p>{facts.text4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
