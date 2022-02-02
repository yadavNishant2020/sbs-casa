import React from "react";
import "./team.scss";
function Team() {
  return (
    <div id="team">
      <strong className="team-heading">Our Team</strong>
      <div className="team-box-container">
        <div className="member-box member-1">
          <div className="member-img">
            <img src="images/1.jpg" />

            <img className="hover-img" src="images/2.2.jpg" />
          </div>

          <div className="member-name">
            <h3>Ankur Sharma</h3>
            <h5>Founder</h5>
          </div>
        </div>

        <div className="member-box member-3">
          <div className="member-img">
            <img src="images/3.jpg" />

            <img className="hover-img" src="images/3.2.jpg" />
          </div>

          <div className="member-name">
            <h3>Ashish Sharma</h3>
            <h5>Co-Founder</h5>
          </div>
        </div>
        <div className="member-box member-2">
          <div className="member-img">
            <img src="images/1.1.jpg" />

            <img className="hover-img" src="images/2.jpg" />
          </div>

          <div className="member-name">
            <h3>Parag Sharma</h3>
            <h5>Operations and Business</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
