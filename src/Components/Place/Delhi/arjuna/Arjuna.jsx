import React from "react";
import "./arj";
import "./arjuna.css";

function Delhi() {
  return (
    <div>
      <div class="img-slider">
        <div class="slide active">
          <img src="1.jpg" alt="" />
          <div class="info"></div>
        </div>
        <div class="slide">
          <img src="2.jpg" alt="" />
          <div class="info"></div>
        </div>
        <div class="slide">
          <img src="3.jpg" alt="" />
          <div class="info"></div>
        </div>
        <div class="slide">
          <img src="4.jpg" alt="" />
          <div class="info"></div>
        </div>
        <div class="slide">
          <img src="5.jpg" alt="" />
          <div class="info"></div>
        </div>
        <div class="navigation">
          <div class="btn active"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
          <div class="btn"></div>
        </div>
      </div>
    </div>
  );
}

export default Delhi;
