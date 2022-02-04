import React from "react";
import "./intro.scss";
import { Link } from "react-router-dom";
export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="name">
          <h1>THE QUINTESSENTIAL LIVING</h1>
          <p>
            We strive to make your stay with us feel like living with your
            extended family - A home away from home. Hostels for boys and girls
            are available at genuine price and great comfort with all luxury you
            want.
          </p>
          <Link to="/contact">
            <div id="btnMain">
              <div id="btnBox">BOOK NOW</div>
              <div id="btnBottom"></div>
            </div>
          </Link>
        </div>
      </div>
      <div className="right">
        <div className="img">
          <img src="images/Clutter1.gif" alt="" />
        </div>
      </div>
    </div>
  );
}
