import React from "react";
import { Fade, Zoom } from "react-reveal";

import "./team.scss";
function Team() {
  return (
    <div id="team">
      <strong className="team-heading">Our Team</strong>
      <div className="team-box-container">
        <div className="member-box member-1">
          <div className="member-img">
            <Fade bottom>
              <img src="images/1.jpg" />
            </Fade>
            <img className="hover-img" src="images/2.2.jpg" />
          </div>

          <div className="member-name">
            <Zoom clear>
              <h3>Ankur Sharma</h3>
              <h5>Founder</h5>
            </Zoom>
          </div>
        </div>

        <div className="member-box member-3">
          <div className="member-img">
            <Fade bottom>
              <img src="images/3.jpg" />
            </Fade>
            <img className="hover-img" src="images/3.2.jpg" />
          </div>

          <div className="member-name">
            <Zoom clear>
              <h3>Ashish Sharma</h3>
              <h5>Co-Founder</h5>
            </Zoom>
          </div>
        </div>
        <div className="member-box member-2">
          <div className="member-img">
            <Fade bottom>
              <img src="images/1.1.jpg" />
            </Fade>
            <img className="hover-img" src="images/2.jpg" />
          </div>

          <div className="member-name">
            <Zoom clear>
              <h3>Parag Sharma</h3>
              <h5>Operations and Business</h5>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
