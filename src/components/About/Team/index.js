import Team2 from "../../../assets/img/given.jpeg";
import Team3 from "../../../assets/img/mayjen.jpg";
import Team4 from "../../../assets/img/elsha.jpeg";
import Team5 from "../../../assets/img/team-4.jpg";
import { getDatabase, ref, onValue } from "firebase/database";
import React, { useState, useEffect } from "react";

const Team = () => {
  const [team, setTeam] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const teamRef = ref(db, "team");
    onValue(teamRef, (snapshot) => {
      const data = snapshot.val();
      setTeam(data);
    });
  }, []);
  return (
    <div className="team">
      <div className="container">
        <div className="section-header text-center">
          <p>Meet Our Team</p>
          <h2>Our Engineers &amp; Workers</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img
                  src={`data:image/jpg;base64,${team.team1}`}
                  alt="Donald John, Engineer"
                />{" "}
                {/* Descriptive alt attribute */}
              </div>
              <div className="team-text">
                <h2>Gill Erza Tangka</h2>
                <p>Engineer</p>
                <div className="team-social">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    href="https://www.instagram.com/scxvztangka_"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src={Team2} alt="Adam Phillips, Engineer" />{" "}
                {/* Descriptive alt attribute */}
              </div>
              <div className="team-text">
                <h2>Given Azarya Pantouw</h2>
                <p>Engineer</p>
                <div className="team-social">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="https://www.facebook.com/givenpantouw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    href="https://www.instagram.com/pantouwgiven"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src={Team3} alt="Thomas Olsen, Worker" />{" "}
                {/* Descriptive alt attribute */}
              </div>
              <div className="team-text">
                <h2>Mayjen Mclearen Putra Rarentewan</h2>
                <p>Worker</p>
                <div className="team-social">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src={Team4} alt="James Alien, Worker" />{" "}
                {/* Descriptive alt attribute */}
              </div>
              <div className="team-text">
                <h2>Elsha Tambuwun</h2>
                <p>Worker</p>
                <div className="team-social">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="https://www.facebook.com/elshatambuwun"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/elshaddai-grace-tambuwun-355899304/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    href="https://www.instagram.com/elshaa.tambuwun"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img src={Team5} alt="James Alien, Worker" />{" "}
                {/* Descriptive alt attribute */}
              </div>
              <div className="team-text">
                <h2>Vallerie Joanna Salindeho</h2>
                <p>Worker</p>
                <div className="team-social">
                  <a
                    href="https://twitter.com/jamesalien"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    href="https://www.instagram.com/valleriejoannaa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
