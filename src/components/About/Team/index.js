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
          <p>{team.miniTitle}</p>
          <h2>{team.Title}</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="team-item">
              <div className="team-img">
                <img
                  src={`data:image/jpg;base64,${team.team1}`}
                  alt="Gill Erza Tangka"
                />{" "}
                {/* Descriptive alt attribute */}
              </div>
              <div className="team-text">
                <h2>{team.Name1}</h2>
                <p>{team.Job1}</p>
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
                <img
                  src={`data:image/jpg;base64,${team.team2}`}
                  alt="Given Azarya Pantouw"
                />{" "}
                {/* Descriptive alt attribute */}
              </div>
              <div className="team-text">
                <h2>{team.Name2}</h2>
                <p>{team.Job1}</p>
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
                <img
                  src={`data:image/jpg;base64,${team.team3}`}
                  alt="Mayjen Mclearen Putra Rarentewan"
                />{" "}
                {/* Descriptive alt attribute */}
              </div>
              <div className="team-text">
                <h2>{team.Name3}</h2>
                <p>{team.Job1}</p>
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
                <img
                  src={`data:image/jpg;base64,${team.team4}`}
                  alt="Elsha Tambuwun"
                />{" "}
                {/* Descriptive alt attribute */}
              </div>
              <div className="team-text">
                <h2>{team.Name4}</h2>
                <p>{team.Job2}</p>
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
                <img
                  src={`data:image/jpg;base64,${team.team5}`}
                  alt="Vallerie Joanna Salindeho"
                />{" "}
                {/* Descriptive alt attribute */}
              </div>
              <div className="team-text">
                <h2>{team.Name5}</h2>
                <p>{team.Job2}</p>
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
