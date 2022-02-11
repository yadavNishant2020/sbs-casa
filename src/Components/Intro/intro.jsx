import React from "react";
import "./intro.scss";
import { Link } from "react-router-dom";
import { Fade, Zoom } from "react-reveal";

export default function Intro() {
  return (
    <>
      <div className="intro" id="intro">
        <div className="left">
          <div className="name">
            <Fade bottom>
              <h1>THE QUINTESSENTIAL LIVING</h1>
              <p>
                We strive to make your stay with us feel like living with your
                extended family - A home away from home. Hostels for boys and
                girls are available at genuine price and great comfort with all
                luxury you want.
              </p>
              <Link to="/contact">
                <div id="btnMain">
                  <div id="btnBox">BOOK NOW</div>
                  <div id="btnBottom"></div>
                </div>
              </Link>
            </Fade>
          </div>
        </div>
        <div className="right">
          <div className="img">
            <Zoom clear>
              <img src="images/Clutter1.gif" alt="" />
            </Zoom>
          </div>
        </div>
      </div>
    </>
  );
}
